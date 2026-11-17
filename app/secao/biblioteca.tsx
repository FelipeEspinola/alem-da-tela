import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Linking, ActivityIndicator, StyleSheet } from 'react-native';
import { MATERIAIS, Material } from '../../src/data/materiais';
import { listarMateriais, FiltrosBib } from '../../src/services/bibliotecaService';
import Chips from '../../src/components/Chips';
import { colors, fonts } from '../../src/theme';
import { BannerFoto } from '../../src/components/Imagem';
import { FOTOS } from '../../src/data/imagens';

const publicos = Array.from(new Set(MATERIAIS.flatMap((m) => m.publico)));
const tipos = Array.from(new Set(MATERIAIS.map((m) => m.tipo)));
const temas = Array.from(new Set(MATERIAIS.map((m) => m.tema)));

export default function Biblioteca() {
  const [f, setFiltros] = useState<FiltrosBib>({ busca: '', publico: null, tipo: null, tema: null });
  const [itens, setItens] = useState<Material[] | null>(null);
  const [erro, setErro] = useState(false);
  // Ao mudar um filtro, volta ao estado de carregamento antes da nova consulta.
  const setF = (novo: FiltrosBib) => { setFiltros(novo); setItens(null); setErro(false); };

  useEffect(() => {
    let vivo = true;
    listarMateriais(f).then((r) => vivo && setItens(r)).catch(() => vivo && setErro(true));
    return () => { vivo = false; };
  }, [f]);
  return (
    <View style={s.wrap}>
      <BannerFoto {...FOTOS.biblioteca} />
      <Text style={s.tag}>Biblioteca de materiais</Text>
      <Text style={s.h1} accessibilityRole="header">Guias e manuais para ler e baixar</Text>
      <View style={s.aviso}><Text style={s.avisoT}>O acervo está no começo: só entram materiais com fonte e link verificados. Ainda não há vídeos, cartilhas escolares nem artigos científicos catalogados.</Text></View>
      <TextInput value={f.busca} onChangeText={(busca) => setF({ ...f, busca })} placeholder="Buscar por palavra-chave" accessibilityLabel="Buscar materiais por palavra-chave" style={s.input} />
      <Chips titulo="Público" opcoes={publicos} valor={f.publico} onChange={(publico) => setF({ ...f, publico })} />
      <Chips titulo="Tipo" opcoes={tipos} valor={f.tipo} onChange={(tipo) => setF({ ...f, tipo })} />
      <Chips titulo="Tema" opcoes={temas} valor={f.tema} onChange={(tema) => setF({ ...f, tema })} />
      {itens === null && !erro && <ActivityIndicator color={colors.cobalt} accessibilityLabel="Carregando materiais" />}
      {erro && <Text style={s.msg} accessibilityRole="alert">Não foi possível carregar os materiais. Tente novamente.</Text>}
      {itens?.length === 0 && <Text style={s.msg}>Nenhum material encontrado com esses filtros. Tente limpar a busca.</Text>}
      {itens?.map((m) => (
        <View key={m.id} style={s.item}>
          <Text style={s.meta}>{m.tipo} · {m.formato} · {m.data}</Text>
          <Text style={s.h2}>{m.titulo}</Text>
          <Text style={s.p}>{m.descricao}</Text>
          <Text style={s.det}>Fonte: {m.fonte}. Para: {m.publico.join(', ')}.</Text>
          {m.observacao && <Text style={s.det}>{m.observacao}</Text>}
          <Pressable onPress={() => Linking.openURL(m.link)} accessibilityRole="link" accessibilityLabel={`${m.formato === 'PDF' ? 'Abrir PDF' : 'Abrir página'}: ${m.titulo}`} style={s.btn}>
            <Text style={s.btnT}>{m.formato === 'PDF' ? 'Abrir PDF' : 'Abrir página'}</Text>
          </Pressable>
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
  meta: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase', color: colors.cobalt },
  aviso: { backgroundColor: colors.sand, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.coral }, avisoT: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  input: { borderWidth: 2, borderColor: colors.line, backgroundColor: colors.white, padding: 14, minHeight: 48, fontFamily: fonts.body, fontSize: 16, color: colors.ink },
  msg: { fontFamily: fonts.body, fontSize: 16, color: colors.muted, paddingVertical: 24 },
  item: { borderTopWidth: 1, borderTopColor: colors.line, paddingVertical: 24, gap: 10 },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 12, paddingHorizontal: 20, minHeight: 48, justifyContent: 'center', alignSelf: 'flex-start' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 15 },
});
