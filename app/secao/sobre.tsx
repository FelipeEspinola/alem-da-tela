import { View, Text, Pressable, Linking, StyleSheet } from 'react-native';
import { ContatoForm, NewsletterForm } from '../../src/components/Formularios';
import { BannerFoto } from '../../src/components/Imagem';
import { FOTOS } from '../../src/data/imagens';
import { colors, fonts } from '../../src/theme';

// Somente links que apareceram em fontes consultadas durante o desenvolvimento.
const FONTES = [
  ['Lei nº 15.100/2025 (texto oficial)', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15100.htm'],
  ['Decreto nº 12.385/2025 (texto oficial, ainda não conferido pela equipe)', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12385.htm'],
  ['Disque 100: Agência Gov / Ministério dos Direitos Humanos', 'https://agenciagov.ebc.com.br/noticias/202609/disque-100-conheca-os-principais-mitos-e-verdades-sobre-o-servico'],
  ['CVV: relatório de atividades do 1º trimestre de 2026', 'https://cvv.org.br/wp-content/uploads/2026/05/RelatorioCVV_1Tri_2026.pdf.pdf'],
  ['Austrália e redes sociais: CNN Brasil', 'https://www.cnnbrasil.com.br/tecnologia/entenda-por-que-a-australia-decidiu-restringir-redes-sociais-para-jovens/'],
];

export default function Sobre() {
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Sobre</Text>
      <Text style={s.h1} accessibilityRole="header">Quem somos e para que serve este site</Text>
      <Text style={s.p}>O Além da Tela é um projeto educativo que reúne informação confiável e orientações práticas sobre o uso de telas por crianças e adolescentes, para famílias, professores e gestores escolares. A proposta é informar sem alarmismo e sem culpabilizar pais ou adolescentes: nem toda tecnologia é prejudicial, e o que importa é como, quanto e no lugar de quê.</Text>

      <Text style={s.h2}>Contexto acadêmico</Text>
      <Text style={s.p}>Projeto desenvolvido na disciplina Educação Digital, da Faculdade de Tecnologia Senac RJ, sob a orientação da professora Gabriela Silveira.</Text>
      <Text style={s.p}>Integrantes: Felipe Espínola e Zeneida Girão.</Text>
      <BannerFoto {...FOTOS.sobreNos} maxW={380} />

      <Text style={s.h2}>Fontes e referências</Text>
      <BannerFoto {...FOTOS.biblioteca} />
      <Text style={s.p}>Cada página indica a fonte e a data de verificação das informações. Principais referências usadas até aqui:</Text>
      {FONTES.map(([t, u]) => (
        <Pressable key={u} onPress={() => Linking.openURL(u)} accessibilityRole="link" style={s.link}><Text style={s.linkT}>{t}</Text></Pressable>
      ))}

      <Text style={s.h2}>Contato</Text>
      <ContatoForm />
      <NewsletterForm />
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 760, width: '100%', alignSelf: 'center', gap: 14, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 24, color: colors.ink, marginTop: 12 },
  p: { fontFamily: fonts.body, fontSize: 17, lineHeight: 27, color: colors.muted },
  link: { minHeight: 44, justifyContent: 'center' }, linkT: { fontFamily: fonts.bold, fontSize: 15, color: colors.cobalt, textDecorationLine: 'underline' },
});
