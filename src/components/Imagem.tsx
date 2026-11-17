import { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';

// As dimensões vêm dos dados (w, h): Image.resolveAssetSource não existe no React Native Web.
type Props = { fonte: number; w: number; h: number; alt: string };

export function Infografico({ fonte, w, h, alt, descricao }: Props & { descricao: string[] }) {
  const [aberto, setAberto] = useState(false);
  return (
    <View style={s.wrap}>
      <View style={{ width: '100%', aspectRatio: w / h }}>
        <Image source={fonte} accessibilityLabel={alt} style={s.fill} resizeMode="contain" />
      </View>
      <Pressable onPress={() => setAberto(!aberto)} accessibilityRole="button" accessibilityState={{ expanded: aberto }} style={s.btn}>
        <Text style={s.btnT}>{aberto ? 'Ocultar descrição em texto' : 'Ver descrição em texto'}</Text>
      </Pressable>
      {aberto && descricao.map((t) => <Text key={t} style={s.p}>{t}</Text>)}
    </View>
  );
}

export function Ilustracao({ fonte, w, h, alt }: Props) {
  return (
    <View style={{ width: '100%', aspectRatio: w / h, maxHeight: 380 }}>
      <Image source={fonte} accessibilityLabel={alt} style={s.fill} resizeMode="cover" />
    </View>
  );
}

// Banner com foto: nunca é ampliado além do tamanho original, para não ficar borrado.
export function BannerFoto({ fonte, w, h, alt, maxW }: Props & { maxW?: number }) {
  return (
    <View style={{ width: '100%', maxWidth: Math.min(w, maxW ?? w), alignSelf: 'center' }}>
      <View style={{ width: '100%', aspectRatio: w / h, borderRadius: 14, overflow: 'hidden' }}>
        <Image source={fonte} accessibilityLabel={alt} style={s.fill} resizeMode="cover" />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  // A proporção fica no contêiner; a imagem só o preenche (no navegador, a imagem ignoraria aspectRatio).
  fill: { width: '100%', height: '100%' },
  wrap: { gap: 8, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.paper },
  btn: { minHeight: 48, justifyContent: 'center', paddingHorizontal: 14 },
  btnT: { fontFamily: fonts.bold, fontSize: 14, color: colors.cobalt, textDecorationLine: 'underline' },
  p: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.ink, paddingHorizontal: 14, paddingBottom: 6 },
});
