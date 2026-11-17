import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { colors, fonts } from '../theme';
import { SECOES } from '../data/nav';

export default function Footer() {
  return (
    <View style={s.wrap} accessibilityRole="contentinfo">
      <View style={s.inner}>
        <Text style={s.brand}>Além da Tela</Text>
        <Text style={s.p}>Projeto da disciplina Educação Digital (professora Gabriela Silveira), Faculdade de Tecnologia Senac RJ. Autores: Felipe Espínola e Zeneida Girão. Conteúdo educativo e orientativo; não substitui avaliação de profissionais de saúde ou educação.</Text>
        <View style={s.links}>
          {SECOES.map((x) => (
            <Link key={x.slug} href={{ pathname: '/secao/[slug]', params: { slug: x.slug } }} style={s.link}>{x.curto}</Link>
          ))}
        </View>
        <Text style={s.small}>Este site não coleta dados pessoais. Conteúdos marcados como demonstração não são evidência real.</Text>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { backgroundColor: colors.ink, paddingVertical: 48, paddingHorizontal: 20 },
  inner: { maxWidth: 1200, width: '100%', alignSelf: 'center', gap: 16 },
  brand: { fontFamily: fonts.display, color: colors.white, fontSize: 26 },
  p: { fontFamily: fonts.body, color: '#B8C4DC', fontSize: 15, lineHeight: 24, maxWidth: 640 },
  links: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 },
  link: { fontFamily: fonts.bold, color: colors.cyan, fontSize: 14, paddingVertical: 8 },
  small: { fontFamily: fonts.body, color: '#7F8DAA', fontSize: 13 },
});
