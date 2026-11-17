import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { BannerFoto } from '../src/components/Imagem';
import { FOTOS } from '../src/data/imagens';
import { colors, fonts, BREAK } from '../src/theme';

const TEMAS = [
  ['Saúde física e sono', 'Sono, visão, postura e movimento.'],
  ['Saúde mental e bem-estar', 'Ansiedade, humor e isolamento.'],
  ['Atenção e aprendizagem', 'Concentração e rotina de estudo.'],
  ['Riscos online', 'Cyberbullying, conteúdo impróprio e exposição de dados.'],
];

function Btn({ href, children, dark }: { href: any; children: string; dark?: boolean }) {
  return (
    <Link href={href} accessibilityRole="button" style={[s.btn, dark ? s.btnDark : s.btnLight]}>
      <Text style={[s.btnText, { color: dark ? colors.ink : colors.white }]}>{children}</Text>
    </Link>
  );
}

export default function Home() {
  const { width } = useWindowDimensions();
  const wide = width >= BREAK;
  return (
    <View>
      {/* Abertura */}
      <View style={[s.hero, wide && s.heroWide]}>
        <View style={{ flex: 1, gap: 20 }}>
          <Text style={s.kicker}>Educação digital para famílias e escolas</Text>
          <Text style={[s.h1, wide && { fontSize: 68, lineHeight: 72 }]}>
            Existe muita vida <Text style={s.em}>além da tela.</Text>
          </Text>
          <Text style={s.lead}>Informação confiável e caminhos práticos para pais, responsáveis e educadores conversarem sobre o uso do celular, sem alarmismo e sem culpa.</Text>
          <View style={s.row}>
            <Btn href={{ pathname: '/secao/[slug]', params: { slug: 'quiz' } }}>Fazer o quiz</Btn>
            <Btn dark href={{ pathname: '/secao/[slug]', params: { slug: 'por-que-se-preocupar' } }}>Entender os impactos</Btn>
          </View>
        </View>
        <Image source={require('../assets/logo.png')} accessibilityLabel="Menino caminhando para fora de um celular que se estilhaça" style={[s.heroImg, wide && { width: 460, height: 460 }]} resizeMode="contain" />
      </View>

      {/* Dois caminhos */}
      <View style={[s.paths, wide && { flexDirection: 'row' }]}>
        <Link href={{ pathname: '/secao/[slug]', params: { slug: 'guia-pais' } }} style={[s.path, { backgroundColor: colors.sand }]}>
          <View style={s.pathInner}>
            <Text style={s.pathLabel}>Pais e responsáveis</Text>
            <Text style={s.pathTitle}><br/>Como conversar, combinar regras e propor outras atividades.</Text>
          </View>
        </Link>
        <Link href={{ pathname: '/secao/[slug]', params: { slug: 'guia-educadores' } }} style={[s.path, { backgroundColor: colors.navy }]}>
          <View style={s.pathInner}>
            <Text style={[s.pathLabel, { color: colors.cyan }]}>Escolas e professores</Text>
            <Text style={[s.pathTitle, { color: colors.white }]}><br/>Como aplicar a lei, orientar as famílias e planejar atividades.</Text>
          </View>
        </Link>
      </View>

      {/* Por que se preocupar: lista editorial */}
      <View style={s.section}>
        <Text style={s.h2}>Por que se preocupar?</Text>
        <Text style={s.body}>Nem toda tela é um problema. O que importa é como, quanto e no lugar de quê. Cada tema traz o que a ciência mostra, o que ainda é incerto e o que fazer.</Text>
        {TEMAS.map(([t, d], i) => (
          <Link key={t} href={{ pathname: '/secao/[slug]', params: { slug: 'por-que-se-preocupar' } }} style={s.item}>
            <View style={s.itemRow}>
              <Text style={s.num}>{String(i + 1).padStart(2, '0')}</Text>
              <View style={{ flex: 1 }}><Text style={s.itemT}>{t}</Text><Text style={s.itemD}>{d}</Text></View>
            </View>
          </Link>
        ))}
      </View>

      <View style={s.banner}><BannerFoto {...FOTOS.infancia} /></View>

      {/* Quiz */}
      <View style={s.quiz}>
        <Text style={[s.h2, { color: colors.white }]}>Seu filho usa o celular de forma saudável?</Text>
        <Text style={[s.body, { color: '#C7D3EC' }]}>Um questionário educativo e anônimo, com orientações ao final. Não é diagnóstico e não guarda dados pessoais.</Text>
        <Btn dark href={{ pathname: '/secao/[slug]', params: { slug: 'quiz' } }}>Começar</Btn>
      </View>

      {/* Fechamento */}
      <View style={s.section}>
        <BannerFoto {...FOTOS.parque} />
        <Text style={s.closing}>Que tal combinar um passeio sem celular neste fim de semana?</Text>
        <Link href={{ pathname: '/secao/[slug]', params: { slug: 'sobre' } }} style={s.mais}>Contato, sugestões e newsletter</Link>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  hero: { padding: 20, paddingTop: 32, gap: 12, maxWidth: 1200, width: '100%', alignSelf: 'center' },
  heroWide: { flexDirection: 'row', alignItems: 'center', padding: 48 },
  heroImg: { width: '100%', height: 280 },
  kicker: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, color: colors.ink, fontSize: 44, lineHeight: 48 },
  em: { fontFamily: fonts.displayItalic, color: colors.cobalt },
  lead: { fontFamily: fonts.body, color: colors.muted, fontSize: 18, lineHeight: 28, maxWidth: 560 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  btn: { paddingHorizontal: 22, paddingVertical: 14, minHeight: 48, borderRadius: 4, textAlign: 'center' },
  btnLight: { backgroundColor: colors.cobalt }, btnDark: { backgroundColor: colors.cyan },
  btnText: { fontFamily: fonts.bold, fontSize: 16 },
  paths: { width: '100%' },
  path: { flex: 1, padding: 32, minHeight: 200 },
  // No navegador o Link vira um <a> simples: o alinhamento ao pé e o espaçamento ficam num View interno.
  pathInner: { flex: 1, minHeight: 136, justifyContent: 'flex-end', gap: 12 },
  pathLabel: { fontFamily: fonts.bold, fontSize: 24, letterSpacing: 1.2, textTransform: 'uppercase', color: colors.cobalt },
  pathTitle: { fontFamily: fonts.display, fontSize: 26, lineHeight: 32, color: colors.ink },
  section: { padding: 24, paddingVertical: 56, maxWidth: 900, width: '100%', alignSelf: 'center', gap: 16 },
  h2: { fontFamily: fonts.display, fontSize: 32, lineHeight: 38, color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 17, lineHeight: 27, color: colors.muted },
  item: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 20, minHeight: 48 },
  itemRow: { flexDirection: 'row', gap: 20 },
  num: { fontFamily: fonts.displayItalic, fontSize: 28, color: colors.cobalt, width: 44 },
  itemT: { fontFamily: fonts.display, fontSize: 22, color: colors.ink }, itemD: { fontFamily: fonts.body, fontSize: 16, color: colors.muted, marginTop: 4 },
  banner: { paddingHorizontal: 24, paddingBottom: 40, maxWidth: 900, width: '100%', alignSelf: 'center' },
  quiz: { backgroundColor: colors.cobalt, padding: 32, paddingVertical: 56, gap: 16, alignItems: 'flex-start' },
  mais: { fontFamily: fonts.bold, fontSize: 16, color: colors.cobalt, paddingVertical: 12 },
  closing: { fontFamily: fonts.displayItalic, fontSize: 34, lineHeight: 42, color: colors.ink },
});
