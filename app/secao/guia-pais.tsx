import GuiaPagina from '../../src/components/GuiaPagina';
import { Infografico, BannerFoto } from '../../src/components/Imagem';
import { GUIA_PAIS } from '../../src/data/guias';
import { INFO, FOTOS } from '../../src/data/imagens';
export default function GuiaPais() {
  return <GuiaPagina g={GUIA_PAIS} topo={<><BannerFoto {...FOTOS.infancia} /><Infografico {...INFO.idade} /></>} />;
}
