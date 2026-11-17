import AsyncStorage from '@react-native-async-storage/async-storage';

// Camada de armazenamento local (localStorage no navegador, armazenamento do app no celular).
// Se um dia houver API real, só os serviços que usam isto precisam mudar.
export async function lerJSON<T>(chave: string, padrao: T): Promise<T> {
  try {
    const bruto = await AsyncStorage.getItem(chave);
    return bruto ? (JSON.parse(bruto) as T) : padrao;
  } catch {
    return padrao;
  }
}
export async function gravarJSON(chave: string, valor: unknown): Promise<boolean> {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}
