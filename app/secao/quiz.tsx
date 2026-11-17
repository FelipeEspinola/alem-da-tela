import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { PERGUNTAS, OPCOES, MAX } from '../../src/data/quiz';
import { calcular, registrarConclusao, Resultado } from '../../src/services/quizService';
import { colors, fonts } from '../../src/theme';

const AVISO = 'Este questionário é educativo e orientativo. Não é um diagnóstico e não substitui a avaliação de um profissional. Suas respostas ficam só neste aparelho e não pedimos nenhum dado pessoal.';

export default function Quiz() {
  const [etapa, setEtapa] = useState(-1); // -1 = apresentação
  const [respostas, setRespostas] = useState<number[]>([]);
  const [res, setRes] = useState<Resultado | null>(null);

  const responder = async (idx: number) => {
    const novas = [...respostas, idx];
    if (novas.length === PERGUNTAS.length) {
      const r = calcular(novas);
      setRes(r); setRespostas(novas);
      await registrarConclusao(r.faixa.id);
    } else { setRespostas(novas); setEtapa(etapa + 1); }
  };
  const voltar = () => { setRespostas(respostas.slice(0, -1)); setEtapa(etapa - 1); };
  const refazer = () => { setRes(null); setRespostas([]); setEtapa(-1); };

  if (res) return (
    <View style={s.wrap}>
      <Text style={s.tag}>Resultado</Text>
      <Text style={s.h1} accessibilityRole="header">{res.faixa.titulo}</Text>
      <Text style={s.p}>{res.faixa.explicacao}</Text>
      <Text style={s.h2}>Próximos passos</Text>
      {res.faixa.acoes.map((a) => <Text key={a} style={s.item}>— {a}</Text>)}
      <Text style={s.small}>Como calculamos: soma simples de 0 a 3 pontos por pergunta ({res.pontos} de {MAX}). As faixas foram definidas pela equipe do projeto e não são clinicamente validadas.</Text>
      <View style={s.aviso}><Text style={s.avisoT}>{AVISO}</Text></View>
      <Link href={{ pathname: '/secao/[slug]', params: { slug: 'guia-pais' } }} style={s.link}>Ver o guia para pais</Link>
      <Link href={{ pathname: '/secao/[slug]', params: { slug: 'ajuda' } }} style={s.link}>Ajuda e apoio</Link>
      <Pressable onPress={refazer} accessibilityRole="button" style={s.btnOut}><Text style={s.btnOutT}>Refazer o quiz</Text></Pressable>
    </View>
  );

  if (etapa < 0) return (
    <View style={s.wrap}>
      <Text style={s.tag}>Quiz</Text>
      <Text style={s.h1} accessibilityRole="header">Seu filho usa o celular de forma saudável?</Text>
      <Text style={s.p}>São {PERGUNTAS.length} perguntas rápidas, pensadas para pais e responsáveis. Leva cerca de dois minutos.</Text>
      <View style={s.aviso}><Text style={s.avisoT}>{AVISO}</Text></View>
      <Pressable onPress={() => setEtapa(0)} accessibilityRole="button" style={s.btn}><Text style={s.btnT}>Começar</Text></Pressable>
    </View>
  );

  const p = PERGUNTAS[etapa];
  const pct = Math.round((etapa / PERGUNTAS.length) * 100);
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Pergunta {etapa + 1} de {PERGUNTAS.length}</Text>
      <View style={s.track} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: pct }}>
        <View style={[s.fill, { width: `${pct}%` }]} />
      </View>
      <Text style={s.h1} accessibilityRole="header">{p.texto}</Text>
      <View accessibilityRole="radiogroup" style={{ gap: 10 }}>
        {OPCOES.map((o, i) => (
          <Pressable key={o.texto} onPress={() => responder(i)} accessibilityRole="radio" style={({ pressed, hovered }: any) => [s.opt, (pressed || hovered) && s.optOn]}>
            <Text style={s.optT}>{o.texto}</Text>
          </Pressable>
        ))}
      </View>
      {etapa > 0 && <Pressable onPress={voltar} accessibilityRole="button" style={s.btnOut}><Text style={s.btnOutT}>Voltar</Text></Pressable>}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 720, width: '100%', alignSelf: 'center', gap: 16, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 32, lineHeight: 38, color: colors.ink },
  h2: { fontFamily: fonts.display, fontSize: 24, color: colors.ink, marginTop: 8 },
  p: { fontFamily: fonts.body, fontSize: 17, lineHeight: 27, color: colors.muted },
  item: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: colors.ink },
  small: { fontFamily: fonts.body, fontSize: 13, lineHeight: 20, color: colors.muted },
  aviso: { backgroundColor: colors.sand, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.coral },
  avisoT: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  track: { height: 6, backgroundColor: colors.line, borderRadius: 3 }, fill: { height: 6, backgroundColor: colors.cobalt, borderRadius: 3 },
  opt: { borderWidth: 2, borderColor: colors.line, padding: 16, minHeight: 56, justifyContent: 'center', backgroundColor: colors.white },
  optOn: { borderColor: colors.cobalt, backgroundColor: '#EAF1FE' }, optT: { fontFamily: fonts.bold, fontSize: 17, color: colors.ink },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 14, paddingHorizontal: 24, minHeight: 48, alignSelf: 'flex-start', justifyContent: 'center' },
  btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 16 },
  btnOut: { borderWidth: 2, borderColor: colors.ink, paddingVertical: 12, paddingHorizontal: 22, minHeight: 48, alignSelf: 'flex-start', justifyContent: 'center' },
  btnOutT: { fontFamily: fonts.bold, color: colors.ink, fontSize: 16 },
  link: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 16, paddingVertical: 10 },
});
