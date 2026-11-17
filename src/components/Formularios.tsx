import { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { TIPOS_CONTATO, validarContato, validarInscricao, registrarContato, inscreverNewsletter, cancelarNewsletter, Erros } from '../services/interacaoService';
import { colors, fonts } from '../theme';

const DEMO = 'Modo demonstração: sem servidor, o que você enviar fica salvo só neste aparelho e não chega à equipe.';

function Campo({ label, erro, children }: { label: string; erro?: string; children: React.ReactNode }) {
  return <View style={{ gap: 6 }}><Text style={s.label}>{label}</Text>{children}{erro ? <Text style={s.erro} accessibilityRole="alert">{erro}</Text> : null}</View>;
}

export function ContatoForm() {
  const [tipo, setTipo] = useState<string>('');
  const [mensagem, setMensagem] = useState(''); const [email, setEmail] = useState('');
  const [erros, setErros] = useState<Erros>({}); const [estado, setEstado] = useState<'ocioso' | 'enviando' | 'ok' | 'falha'>('ocioso');
  const enviar = async () => {
    const e = validarContato({ tipo, mensagem, email }); setErros(e);
    if (Object.keys(e).length) return;
    setEstado('enviando');
    const ok = await registrarContato({ tipo, mensagem, email });
    if (ok) { setEstado('ok'); setTipo(''); setMensagem(''); setEmail(''); } else setEstado('falha');
  };
  return (
    <View style={s.box}>
      <Text style={s.h}>Contato e sugestão de conteúdo</Text>
      <Text style={s.small}>{DEMO}</Text>
      <Campo label="Tipo de mensagem" erro={erros.tipo}>
        <View accessibilityRole="radiogroup" style={s.row}>
          {TIPOS_CONTATO.map((t) => <Pressable key={t} onPress={() => setTipo(t)} accessibilityRole="radio" accessibilityState={{ selected: tipo === t }} style={[s.chip, tipo === t && s.chipOn]}><Text style={[s.chipT, tipo === t && { color: colors.white }]}>{t}</Text></Pressable>)}
        </View>
      </Campo>
      <Campo label="Mensagem" erro={erros.mensagem}>
        <TextInput value={mensagem} onChangeText={setMensagem} multiline numberOfLines={5} maxLength={1000} accessibilityLabel="Mensagem" style={[s.input, { minHeight: 120, textAlignVertical: 'top' }]} />
      </Campo>
      <Campo label="E-mail para resposta (opcional)" erro={erros.email}>
        <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoComplete="email" accessibilityLabel="E-mail para resposta, opcional" style={s.input} />
      </Campo>
      <Text style={s.small}>Não peça nem informe dados de crianças ou adolescentes. Nunca informamos nome, escola ou endereço.</Text>
      <Pressable onPress={enviar} disabled={estado === 'enviando'} accessibilityRole="button" style={[s.btn, estado === 'enviando' && { opacity: 0.6 }]}>
        {estado === 'enviando' ? <ActivityIndicator color={colors.white} accessibilityLabel="Enviando" /> : <Text style={s.btnT}>Enviar</Text>}
      </Pressable>
      {estado === 'ok' && <Text style={s.ok} accessibilityRole="alert">Mensagem registrada neste aparelho (demonstração). Obrigado!</Text>}
      {estado === 'falha' && <Text style={s.erro} accessibilityRole="alert">Não foi possível salvar a mensagem. Tente novamente.</Text>}
    </View>
  );
}

export function NewsletterForm() {
  const [email, setEmail] = useState(''); const [ok, setOk] = useState(false);
  const [erros, setErros] = useState<{ email?: string; consentimento?: string }>({}); const [estado, setEstado] = useState<'ocioso' | 'enviando' | 'inscrito' | 'cancelado' | 'falha'>('ocioso');
  const inscrever = async () => {
    const e = validarInscricao(email, ok); setErros(e);
    if (Object.keys(e).length) return;
    setEstado('enviando'); setEstado((await inscreverNewsletter(email)) ? 'inscrito' : 'falha');
  };
  const cancelar = async () => { const e = validarInscricao(email, true); if (e.email) { setErros({ email: e.email }); return; } setEstado((await cancelarNewsletter(email)) ? 'cancelado' : 'falha'); };
  return (
    <View style={s.box}>
      <Text style={s.h}>Newsletter (opcional)</Text>
      <Text style={s.small}>{DEMO} Nenhum e-mail é enviado nesta versão.</Text>
      <Campo label="E-mail" erro={erros.email}>
        <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoComplete="email" accessibilityLabel="E-mail para a newsletter" style={s.input} />
      </Campo>
      <Pressable onPress={() => setOk(!ok)} accessibilityRole="checkbox" accessibilityState={{ checked: ok }} style={s.check}>
        <View style={[s.box2, ok && s.box2On]}><Text style={{ color: colors.white, fontFamily: fonts.bold }}>{ok ? '✓' : ''}</Text></View>
        <Text style={[s.small, { flex: 1 }]}>Autorizo o uso do meu e-mail apenas para receber novidades do Além da Tela. Posso cancelar quando quiser.</Text>
      </Pressable>
      {erros.consentimento ? <Text style={s.erro} accessibilityRole="alert">{erros.consentimento}</Text> : null}
      <View style={s.row}>
        <Pressable onPress={inscrever} disabled={estado === 'enviando'} accessibilityRole="button" style={s.btn}><Text style={s.btnT}>Inscrever</Text></Pressable>
        <Pressable onPress={cancelar} accessibilityRole="button" style={s.btnOut}><Text style={s.btnOutT}>Cancelar inscrição</Text></Pressable>
      </View>
      {estado === 'inscrito' && <Text style={s.ok} accessibilityRole="alert">Inscrição registrada neste aparelho (demonstração).</Text>}
      {estado === 'cancelado' && <Text style={s.ok} accessibilityRole="alert">Inscrição removida deste aparelho.</Text>}
      {estado === 'falha' && <Text style={s.erro} accessibilityRole="alert">Não foi possível concluir. Tente novamente.</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  box: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, padding: 20, gap: 14 },
  h: { fontFamily: fonts.display, fontSize: 22, color: colors.ink }, small: { fontFamily: fonts.body, fontSize: 13, lineHeight: 20, color: colors.muted },
  label: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink }, row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  input: { borderWidth: 2, borderColor: colors.line, padding: 12, minHeight: 48, fontFamily: fonts.body, fontSize: 16, color: colors.ink, backgroundColor: colors.paper },
  chip: { borderWidth: 2, borderColor: colors.line, paddingHorizontal: 14, minHeight: 46, justifyContent: 'center' }, chipOn: { backgroundColor: colors.cobalt, borderColor: colors.cobalt }, chipT: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
  btn: { backgroundColor: colors.cobalt, paddingHorizontal: 22, minHeight: 48, justifyContent: 'center', alignSelf: 'flex-start' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 16 },
  btnOut: { borderWidth: 2, borderColor: colors.ink, paddingHorizontal: 20, minHeight: 48, justifyContent: 'center' }, btnOutT: { fontFamily: fonts.bold, color: colors.ink, fontSize: 15 },
  erro: { fontFamily: fonts.bold, fontSize: 13, color: colors.coral }, ok: { fontFamily: fonts.bold, fontSize: 14, color: '#0B7A4B' },
  check: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', minHeight: 44 }, box2: { width: 26, height: 26, borderWidth: 2, borderColor: colors.ink, alignItems: 'center', justifyContent: 'center' }, box2On: { backgroundColor: colors.cobalt, borderColor: colors.cobalt },
});
