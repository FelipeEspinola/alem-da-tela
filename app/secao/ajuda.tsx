import { useState } from 'react';
import { View, Text, Pressable, Linking, StyleSheet } from 'react-native';
import { SERVICOS, SINAIS, FAQ, Servico } from '../../src/data/apoio';
import { Infografico } from '../../src/components/Imagem';
import { INFO } from '../../src/data/imagens';
import { colors, fonts } from '../../src/theme';

function Card({ s: x }: { s: Servico }) {
  return (
    <View style={s.item}>
      <Text style={s.h2}>{x.nome}</Text>
      <Text style={s.p}>{x.paraQue}</Text>
      {x.canais.map((c) => (
        <View key={c.rotulo} style={s.canal}>
          <Text style={s.det}>{c.rotulo}: <Text style={s.val}>{c.valor}</Text></Text>
          {(c.tel || c.url) && (
            <Pressable onPress={() => Linking.openURL(c.tel ? `tel:${c.tel}` : c.url!)} accessibilityRole="link" accessibilityLabel={c.tel ? `Ligar para ${c.valor}` : `Abrir ${c.valor}`} style={s.btn}>
              <Text style={s.btnT}>{c.tel ? 'Ligar' : 'Abrir'}</Text>
            </Pressable>
          )}
        </View>
      ))}
      <Text style={s.det}>{x.horario}</Text>
      <Text style={[s.sel, x.verificacao === 'oficial' ? s.ok : s.warn]}>{x.verificacao === 'oficial' ? 'Fonte oficial' : 'Fonte secundária; confirme no canal oficial'}</Text>
      <Text style={s.small}>{x.fonte} · verificado em {x.verificadoEm.split('-').reverse().join('/')}</Text>
    </View>
  );
}

export default function Ajuda() {
  const [aberta, setAberta] = useState<number | null>(null);
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Ajuda e apoio</Text>
      <Text style={s.h1} accessibilityRole="header">Você não precisa lidar com isso sozinho</Text>
      <View style={s.urgente} accessibilityRole="alert">
        <Text style={s.urgT}>Se houver risco imediato à vida, ligue para o SAMU (192) ou, para apoio emocional, para o CVV (188).</Text>
      </View>
      <Infografico {...INFO.ajuda} />
      <Text style={s.aviso}>O Além da Tela não presta atendimento e não substitui serviços profissionais. Abaixo estão canais públicos, cada um com a fonte da informação.</Text>

      <Text style={s.h2}>Quando procurar um profissional</Text>
      <Text style={s.p}>Orientação geral elaborada pelo projeto, sem caráter de diagnóstico. Vale conversar com um profissional se alguns destes sinais persistirem:</Text>
      {SINAIS.map((x) => <Text key={x} style={s.p}>— {x}</Text>)}

      <Text style={s.h2}>Serviços e canais de apoio</Text>
      {SERVICOS.map((x) => <Card key={x.id} s={x} />)}

      <Text style={s.h2}>Perguntas frequentes</Text>
      {FAQ.map((f, i) => (
        <View key={f.p} style={s.faq}>
          <Pressable onPress={() => setAberta(aberta === i ? null : i)} accessibilityRole="button" accessibilityState={{ expanded: aberta === i }} style={s.faqBtn}>
            <Text style={s.faqQ}>{f.p}</Text>
          </Pressable>
          {aberta === i && <Text style={s.p}>{f.r}</Text>}
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 14, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 24, lineHeight: 30, color: colors.ink, marginTop: 12 },
  p: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: colors.muted }, det: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  val: { fontFamily: fonts.bold }, small: { fontFamily: fonts.body, fontSize: 12, color: colors.muted },
  aviso: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  urgente: { backgroundColor: colors.coral, padding: 16 }, urgT: { fontFamily: fonts.bold, fontSize: 16, lineHeight: 24, color: colors.white },
  item: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 20, gap: 8 },
  canal: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 12 },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 10, paddingHorizontal: 20, minHeight: 44, justifyContent: 'center' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 15 },
  sel: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase' }, ok: { color: '#0B7A4B' }, warn: { color: colors.coral },
  faq: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 8, gap: 6 }, faqBtn: { minHeight: 48, justifyContent: 'center' },
  faqQ: { fontFamily: fonts.bold, fontSize: 16, color: colors.ink },
});
