import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Linking, ActivityIndicator, StyleSheet } from 'react-native';
import { NORMAS, Norma } from '../../src/data/normas';
import { listarNormas, Filtros } from '../../src/services/legislacaoService';
import Chips from '../../src/components/Chips';
import { Infografico } from '../../src/components/Imagem';
import { INFO } from '../../src/data/imagens';
import { colors, fonts } from '../../src/theme';

const uniq = (k: keyof Norma) => Array.from(new Set(NORMAS.map((n) => n[k] as string)));
const ROTULO = { oficial: 'Verificada em fonte oficial', secundaria: 'Confirmada em fonte secundária; conferir texto oficial', a_verificar: 'Dados a verificar' } as const;

export default function Legislacao() {
  const [f, setFiltros] = useState<Filtros>({ busca: '', esfera: null, tipo: null, tema: null });
  const [itens, setItens] = useState<Norma[] | null>(null);
  const [erro, setErro] = useState(false);
  const [aberto, setAberto] = useState<string | null>(null);

  // Ao mudar um filtro, volta ao estado de carregamento antes da nova consulta.
  const setF = (novo: Filtros) => { setFiltros(novo); setItens(null); setErro(false); };

  useEffect(() => {
    let vivo = true;
    listarNormas(f).then((r) => vivo && setItens(r)).catch(() => vivo && setErro(true));
    return () => { vivo = false; };
  }, [f]);

  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Legislação</Text>
      <Text style={s.h1} accessibilityRole="header">O que a lei diz sobre celulares na escola</Text>
      <View style={s.aviso}><Text style={s.avisoT}>Regras da rede estadual não valem automaticamente para escolas municipais ou privadas. Cada registro mostra como foi verificado. Este site não substitui o texto oficial nem orientação jurídica.</Text></View>
      <Infografico {...INFO.lei} />
      <Infografico {...INFO.tempo} />
      <TextInput value={f.busca} onChangeText={(busca) => setF({ ...f, busca })} placeholder="Buscar por palavra-chave" accessibilityLabel="Buscar normas por palavra-chave" style={s.input} />
      <Chips titulo="Esfera" opcoes={uniq('esfera')} valor={f.esfera} onChange={(esfera) => setF({ ...f, esfera })} />
      <Chips titulo="Tipo de norma" opcoes={uniq('tipo')} valor={f.tipo} onChange={(tipo) => setF({ ...f, tipo })} />
      <Chips titulo="Tema" opcoes={uniq('tema')} valor={f.tema} onChange={(tema) => setF({ ...f, tema })} />

      {itens === null && !erro && <ActivityIndicator color={colors.cobalt} accessibilityLabel="Carregando normas" />}
      {erro && <Text style={s.msg} accessibilityRole="alert">Não foi possível carregar as normas. Tente novamente.</Text>}
      {itens?.length === 0 && <Text style={s.msg}>Nenhuma norma encontrada com esses filtros. Tente limpar a busca.</Text>}
      {itens?.map((n) => (
        <View key={n.id} style={s.item}>
          <Text style={s.num}>{n.numero} · {n.esfera}{n.uf ? ` (${n.uf})` : ''}</Text>
          <Text style={s.h2}>{n.titulo}</Text>
          <Text style={[s.sel, n.verificacao === 'oficial' ? s.selOk : s.selWarn]}>{ROTULO[n.verificacao]}</Text>
          <Text style={s.p}>{n.resumo}</Text>
          {aberto === n.id && (
            <View style={{ gap: 4 }}>
              <Text style={s.det}>Órgão: {n.orgao}</Text><Text style={s.det}>Abrangência: {n.abrangencia}</Text>
              <Text style={s.det}>Publicação: {n.publicacao ?? 'a verificar'}</Text><Text style={s.det}>Vigência: {n.vigencia}</Text>
              <Text style={s.det}>Última verificação: {n.verificadoEm.split('-').reverse().join('/')} · {n.fonte}</Text>
            </View>
          )}
          <View style={s.row}>
            <Pressable onPress={() => setAberto(aberto === n.id ? null : n.id)} accessibilityRole="button" accessibilityState={{ expanded: aberto === n.id }} style={s.btnOut}><Text style={s.btnOutT}>{aberto === n.id ? 'Menos detalhes' : 'Ver detalhes'}</Text></Pressable>
            {n.link ? <Pressable onPress={() => Linking.openURL(n.link!)} accessibilityRole="link" style={s.btn}><Text style={s.btnT}>Texto oficial</Text></Pressable>
              : <Text style={s.det}>Link oficial: a verificar</Text>}
          </View>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 16, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 22, lineHeight: 28, color: colors.ink },
  p: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: colors.muted }, det: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.ink },
  aviso: { backgroundColor: colors.sand, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.coral }, avisoT: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  input: { borderWidth: 2, borderColor: colors.line, backgroundColor: colors.white, padding: 14, minHeight: 48, fontFamily: fonts.body, fontSize: 16, color: colors.ink },
  label: { fontFamily: fonts.bold, fontSize: 13, color: colors.ink }, chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 2, borderColor: colors.line, paddingHorizontal: 14, minHeight: 44, justifyContent: 'center', backgroundColor: colors.white }, chipOn: { backgroundColor: colors.cobalt, borderColor: colors.cobalt },
  chipT: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
  msg: { fontFamily: fonts.body, fontSize: 16, color: colors.muted, paddingVertical: 24 },
  item: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 24, gap: 10 },
  num: { fontFamily: fonts.displayItalic, fontSize: 16, color: colors.cobalt },
  sel: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase' }, selOk: { color: '#0B7A4B' }, selWarn: { color: colors.coral },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, alignItems: 'center' },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 12, paddingHorizontal: 20, minHeight: 48, justifyContent: 'center' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 15 },
  btnOut: { borderWidth: 2, borderColor: colors.ink, paddingVertical: 10, paddingHorizontal: 18, minHeight: 48, justifyContent: 'center' }, btnOutT: { fontFamily: fonts.bold, color: colors.ink, fontSize: 15 },
});
