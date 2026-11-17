import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';

export default function Chips({ titulo, opcoes, valor, onChange }: { titulo: string; opcoes: string[]; valor: string | null; onChange: (v: string | null) => void }) {
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel={titulo} style={{ gap: 6 }}>
      <Text style={s.label}>{titulo}</Text>
      <View style={s.chips}>
        {[null, ...opcoes].map((o) => (
          <Pressable key={o ?? 'todos'} onPress={() => onChange(o)} accessibilityRole="radio" accessibilityState={{ selected: valor === o }} style={[s.chip, valor === o && s.on]}>
            <Text style={[s.t, valor === o && { color: colors.white }]}>{o ?? 'Todos'}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  label: { fontFamily: fonts.bold, fontSize: 13, color: colors.ink }, chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 2, borderColor: colors.line, paddingHorizontal: 14, minHeight: 44, justifyContent: 'center', backgroundColor: colors.white },
  on: { backgroundColor: colors.cobalt, borderColor: colors.cobalt }, t: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
});
