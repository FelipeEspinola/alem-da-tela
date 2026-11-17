import { useState } from 'react';
import { View, Text, Pressable, Linking, StyleSheet } from 'react-native';
import { PAISES, LICOES, NAO_VERIFICADOS } from '../../src/data/paises';
import { Infografico } from '../../src/components/Imagem';
import { INFO } from '../../src/data/imagens';
import { colors, fonts } from '../../src/theme';

export default function OutrosPaises() {
  const [aberto, setAberto] = useState<string | null>(null);
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>O que outros países fizeram</Text>
      <Text style={s.h1} accessibilityRole="header">Cada país escolheu um caminho diferente</Text>
      <View style={s.aviso}><Text style={s.avisoT}>Comparar não é copiar: as medidas abaixo têm alcances distintos. Todas as informações vêm de reportagens e ainda precisam ser conferidas em fontes oficiais, o que cada registro indica.</Text></View>
      <Infografico {...INFO.paises} />
      {PAISES.map((p) => (
        <View key={p.id} style={s.item}>
          <Text style={s.amb}>{p.ambito}</Text>
          <Text style={s.h2}>{p.pais}</Text>
          <Text style={s.p}>{p.politica}</Text>
          <Text style={s.ref}>Referência: {p.dataRef}</Text>
          {aberto === p.id && (
            <View style={{ gap: 6 }}>
              <Text style={s.det}>Quem é atingido: {p.aplicacao}</Text>
              <Text style={s.det}>Observações: {p.observacoes}</Text>
              <Text style={s.det}>Resultados: sem avaliação verificada até agora.</Text>
              <Text style={s.det}>Fonte: {p.fonte} (secundária) · verificado em {p.verificadoEm.split('-').reverse().join('/')}</Text>
            </View>
          )}
          <View style={s.row}>
            <Pressable onPress={() => setAberto(aberto === p.id ? null : p.id)} accessibilityRole="button" accessibilityState={{ expanded: aberto === p.id }} style={s.btnOut}><Text style={s.btnOutT}>{aberto === p.id ? 'Menos detalhes' : 'Ver detalhes'}</Text></Pressable>
            <Pressable onPress={() => Linking.openURL(p.link)} accessibilityRole="link" style={s.btn}><Text style={s.btnT}>Ler a reportagem</Text></Pressable>
          </View>
        </View>
      ))}
      <Text style={s.h2}>O que dá para aprender</Text>
      {LICOES.map((l) => <Text key={l} style={s.p}>— {l}</Text>)}
      <Text style={s.det}>{NAO_VERIFICADOS}</Text>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 14, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 24, lineHeight: 30, color: colors.ink },
  p: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: colors.muted }, det: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.ink },
  ref: { fontFamily: fonts.bold, fontSize: 13, color: colors.ink },
  aviso: { backgroundColor: colors.sand, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.coral }, avisoT: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  amb: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.8, textTransform: 'uppercase', color: colors.coral },
  item: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 24, gap: 10 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 12, paddingHorizontal: 20, minHeight: 48, justifyContent: 'center' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 15 },
  btnOut: { borderWidth: 2, borderColor: colors.ink, paddingVertical: 10, paddingHorizontal: 18, minHeight: 48, justifyContent: 'center' }, btnOutT: { fontFamily: fonts.bold, color: colors.ink, fontSize: 15 },
});
