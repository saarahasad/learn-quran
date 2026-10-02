/**
 * Interactive Explanation guides keyed by Ājurrūmiyyah chapter + matn line.
 * Shared by the study page and Kingdom of Iʿrāb hall panels.
 */
import KalamSpeechGuide from "../components/ajrumiyyah/KalamSpeechGuide.jsx";
import KalamTypesGuide from "../components/ajrumiyyah/KalamTypesGuide.jsx";
import AlamatIsmGuide from "../components/ajrumiyyah/AlamatIsmGuide.jsx";
import AlamatFailGuide from "../components/ajrumiyyah/AlamatFailGuide.jsx";
import RafaSignsGuide from "../components/ajrumiyyah/RafaSignsGuide.jsx";
import IrabDefinitionGuide from "../components/ajrumiyyah/IrabDefinitionGuide.jsx";
import IrabTypesGuide from "../components/ajrumiyyah/IrabTypesGuide.jsx";
import NasbSignsGuide from "../components/ajrumiyyah/NasbSignsGuide.jsx";
import FathaPositionsGuide from "../components/ajrumiyyah/FathaPositionsGuide.jsx";
import AlifFathaGuide from "../components/ajrumiyyah/AlifFathaGuide.jsx";
import KasrahFathaGuide from "../components/ajrumiyyah/KasrahFathaGuide.jsx";
import YaFathaGuide from "../components/ajrumiyyah/YaFathaGuide.jsx";
import HadhfNunFathaGuide from "../components/ajrumiyyah/HadhfNunFathaGuide.jsx";
import KhafdSignsGuide from "../components/ajrumiyyah/KhafdSignsGuide.jsx";
import KasrahPositionsGuide from "../components/ajrumiyyah/KasrahPositionsGuide.jsx";
import YaKasrahGuide from "../components/ajrumiyyah/YaKasrahGuide.jsx";
import FathaKasrahGuide from "../components/ajrumiyyah/FathaKasrahGuide.jsx";
import JazmSignsGuide from "../components/ajrumiyyah/JazmSignsGuide.jsx";
import SukunPositionsGuide from "../components/ajrumiyyah/SukunPositionsGuide.jsx";
import HadhfJazmGuide from "../components/ajrumiyyah/HadhfJazmGuide.jsx";
import DammaPositionsGuide from "../components/ajrumiyyah/DammaPositionsGuide.jsx";
import WawRafaGuide from "../components/ajrumiyyah/WawRafaGuide.jsx";
import AlifRafaGuide from "../components/ajrumiyyah/AlifRafaGuide.jsx";
import NunRafaGuide from "../components/ajrumiyyah/NunRafaGuide.jsx";
import MarfuatAnwaGuide from "../components/ajrumiyyah/MarfuatAnwaGuide.jsx";
import BabFailGuide from "../components/ajrumiyyah/BabFailGuide.jsx";
import AqsamFailGuide from "../components/ajrumiyyah/AqsamFailGuide.jsx";
import FailMudmarAnwaGuide from "../components/ajrumiyyah/FailMudmarAnwaGuide.jsx";
import NaibFailGuide from "../components/ajrumiyyah/NaibFailGuide.jsx";
import TaghyirFilGuide from "../components/ajrumiyyah/TaghyirFilGuide.jsx";
import AqsamNaibFailGuide from "../components/ajrumiyyah/AqsamNaibFailGuide.jsx";
import MubtadaKhabarGuide from "../components/ajrumiyyah/MubtadaKhabarGuide.jsx";
import MubtadaDhahirMudmarGuide from "../components/ajrumiyyah/MubtadaDhahirMudmarGuide.jsx";
import AqsamKhabarGuide from "../components/ajrumiyyah/AqsamKhabarGuide.jsx";
import NawasikhOverviewGuide from "../components/ajrumiyyah/NawasikhOverviewGuide.jsx";
import KanaAkhawatGuide from "../components/ajrumiyyah/KanaAkhawatGuide.jsx";
import InnaAkhawatGuide from "../components/ajrumiyyah/InnaAkhawatGuide.jsx";
import ZannaAkhawatGuide from "../components/ajrumiyyah/ZannaAkhawatGuide.jsx";
import AfalAnwaGuide from "../components/ajrumiyyah/AfalAnwaGuide.jsx";
import AfalAhkamGuide from "../components/ajrumiyyah/AfalAhkamGuide.jsx";
import AmrBinaaGuide from "../components/ajrumiyyah/AmrBinaaGuide.jsx";
import MudariLettersGuide from "../components/ajrumiyyah/MudariLettersGuide.jsx";
import HukmMudariGuide from "../components/ajrumiyyah/HukmMudariGuide.jsx";
import NawasibMudariGuide from "../components/ajrumiyyah/NawasibMudariGuide.jsx";
import JawazimMudariGuide from "../components/ajrumiyyah/JawazimMudariGuide.jsx";
import MansubatAnwaGuide from "../components/ajrumiyyah/MansubatAnwaGuide.jsx";
import BabMafoolBihiGuide from "../components/ajrumiyyah/BabMafoolBihiGuide.jsx";
import AqsamMafoolBihiGuide from "../components/ajrumiyyah/AqsamMafoolBihiGuide.jsx";
import MudmarMuttasilMafoolGuide from "../components/ajrumiyyah/MudmarMuttasilMafoolGuide.jsx";
import MudmarMunfasilMafoolGuide from "../components/ajrumiyyah/MudmarMunfasilMafoolGuide.jsx";
import MasdarMafoolMutlaqGuide from "../components/ajrumiyyah/MasdarMafoolMutlaqGuide.jsx";
import AnwaMafoolMutlaqGuide from "../components/ajrumiyyah/AnwaMafoolMutlaqGuide.jsx";
import ZarfZamanGuide from "../components/ajrumiyyah/ZarfZamanGuide.jsx";
import ZarfMakanGuide from "../components/ajrumiyyah/ZarfMakanGuide.jsx";
import MajruratOverviewGuide from "../components/ajrumiyyah/MajruratOverviewGuide.jsx";
import MajruratParticlesGuide from "../components/ajrumiyyah/MajruratParticlesGuide.jsx";
import MajruratIdafaGuide from "../components/ajrumiyyah/MajruratIdafaGuide.jsx";
import MajruratFollowerGuide from "../components/ajrumiyyah/MajruratFollowerGuide.jsx";
import MafoolMaahGuide from "../components/ajrumiyyah/MafoolMaahGuide.jsx";
import MafoolMaahChoiceGuide from "../components/ajrumiyyah/MafoolMaahChoiceGuide.jsx";
import MafoolMaahRequiredGuide from "../components/ajrumiyyah/MafoolMaahRequiredGuide.jsx";
import MafoolAjliGuide from "../components/ajrumiyyah/MafoolAjliGuide.jsx";
import MafoolAjliStatesGuide from "../components/ajrumiyyah/MafoolAjliStatesGuide.jsx";
import MunadaTypesGuide from "../components/ajrumiyyah/MunadaTypesGuide.jsx";
import MunadaRulingGuide from "../components/ajrumiyyah/MunadaRulingGuide.jsx";
import LaNafiyaConditionsGuide from "../components/ajrumiyyah/LaNafiyaConditionsGuide.jsx";
import LaNafiyaCancelledGuide from "../components/ajrumiyyah/LaNafiyaCancelledGuide.jsx";
import LaNafiyaRepeatedGuide from "../components/ajrumiyyah/LaNafiyaRepeatedGuide.jsx";
import TamyizDefinitionGuide from "../components/ajrumiyyah/TamyizDefinitionGuide.jsx";
import TamyizConditionsGuide from "../components/ajrumiyyah/TamyizConditionsGuide.jsx";
import HalDefinitionGuide from "../components/ajrumiyyah/HalDefinitionGuide.jsx";
import HalConditionsGuide from "../components/ajrumiyyah/HalConditionsGuide.jsx";
import HalExerciseVocabGuide from "../components/ajrumiyyah/HalExerciseVocabGuide.jsx";
import IstithnaOverviewGuide from "../components/ajrumiyyah/IstithnaOverviewGuide.jsx";
import MustathnaIllaRulingGuide from "../components/ajrumiyyah/MustathnaIllaRulingGuide.jsx";
import MustathnaState2DeepdiveGuide from "../components/ajrumiyyah/MustathnaState2DeepdiveGuide.jsx";
import MustathnaState3DeepdiveGuide from "../components/ajrumiyyah/MustathnaState3DeepdiveGuide.jsx";
import MustathnaGhayruCommentaryGuide from "../components/ajrumiyyah/MustathnaGhayruCommentaryGuide.jsx";
import MustathnaKhalaAdaHashaGuide from "../components/ajrumiyyah/MustathnaKhalaAdaHashaGuide.jsx";
import NaatAgreementGuide from "../components/ajrumiyyah/NaatAgreementGuide.jsx";
import MarifaNakiraGuide from "../components/ajrumiyyah/MarifaNakiraGuide.jsx";
import AtfParticlesGuide from "../components/ajrumiyyah/AtfParticlesGuide.jsx";
import AtfRulingGuide from "../components/ajrumiyyah/AtfRulingGuide.jsx";
import TawkidKindsGuide from "../components/ajrumiyyah/TawkidKindsGuide.jsx";
import TawkidWordsGuide from "../components/ajrumiyyah/TawkidWordsGuide.jsx";
import BadalRulingGuide from "../components/ajrumiyyah/BadalRulingGuide.jsx";
import BadalTypesGuide from "../components/ajrumiyyah/BadalTypesGuide.jsx";
import DammahDrillInteractive from "../components/ajrumiyyah/DammahDrillInteractive.jsx";
import WawDrillInteractive from "../components/ajrumiyyah/WawDrillInteractive.jsx";

/**
 * @returns {null | object | object[]}
 */
export function guideAfterLine(chapterId, lineIdx) {
  if (chapterId === "kalam" && lineIdx === 0) {
    return {
      key: "kalam-speech",
      noHead: true,
      body: <KalamSpeechGuide />,
    };
  }
  if (chapterId === "kalam" && lineIdx === 1) {
    return {
      key: "kalam-types",
      noHead: true,
      body: <KalamTypesGuide />,
    };
  }
  if (chapterId === "kalam" && lineIdx === 2) {
    return {
      key: "alamat-ism",
      noHead: true,
      body: <AlamatIsmGuide />,
    };
  }
  if (chapterId === "kalam" && lineIdx === 5) {
    return {
      key: "alamat-fail",
      noHead: true,
      body: <AlamatFailGuide />,
    };
  }
  if (chapterId === "irab" && lineIdx === 0) {
    return {
      key: "irab-definition",
      noHead: true,
      body: <IrabDefinitionGuide />,
    };
  }
  if (chapterId === "irab" && lineIdx === 1) {
    return {
      key: "irab-types",
      noHead: true,
      body: <IrabTypesGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 0) {
    return {
      key: "rafa-signs",
      noHead: true,
      body: <RafaSignsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 1) {
    return [
      {
        key: "damma-positions",
        noHead: true,
        body: <DammaPositionsGuide />,
      },
      {
        key: "damma-drill",
        noHead: true,
        slot: "drill",
        body: <DammahDrillInteractive />,
      },
    ];
  }
  if (chapterId === "alamat-irab" && lineIdx === 2) {
    return [
      {
        key: "waw-rafa",
        noHead: true,
        body: <WawRafaGuide />,
      },
      {
        key: "waw-drill",
        noHead: true,
        slot: "drill",
        body: <WawDrillInteractive />,
      },
    ];
  }
  if (chapterId === "alamat-irab" && lineIdx === 4) {
    return {
      key: "alif-rafa",
      noHead: true,
      body: <AlifRafaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 5) {
    return {
      key: "nun-rafa",
      noHead: true,
      body: <NunRafaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 6) {
    return {
      key: "nasb-signs",
      noHead: true,
      body: <NasbSignsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 7) {
    return {
      key: "fatha-positions",
      noHead: true,
      body: <FathaPositionsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 8) {
    return {
      key: "alif-fatha",
      noHead: true,
      body: <AlifFathaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 9) {
    return {
      key: "kasrah-fatha",
      noHead: true,
      body: <KasrahFathaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 10) {
    return {
      key: "ya-fatha",
      noHead: true,
      body: <YaFathaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 11) {
    return {
      key: "hadhf-nun-fatha",
      noHead: true,
      body: <HadhfNunFathaGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 12) {
    return {
      key: "khafd-signs",
      noHead: true,
      body: <KhafdSignsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 13) {
    return {
      key: "kasrah-positions",
      noHead: true,
      body: <KasrahPositionsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 14) {
    return {
      key: "ya-kasrah",
      noHead: true,
      body: <YaKasrahGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 15) {
    return {
      key: "fatha-kasrah",
      noHead: true,
      body: <FathaKasrahGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 16) {
    return {
      key: "jazm-signs",
      noHead: true,
      body: <JazmSignsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 17) {
    return {
      key: "sukun-positions",
      noHead: true,
      body: <SukunPositionsGuide />,
    };
  }
  if (chapterId === "alamat-irab" && lineIdx === 18) {
    return {
      key: "hadhf-jazm",
      noHead: true,
      body: <HadhfJazmGuide />,
    };
  }
  if (chapterId === "marfuat" && lineIdx === 0) {
    return {
      key: "marfuat-anwa",
      noHead: true,
      body: <MarfuatAnwaGuide />,
    };
  }
  if (chapterId === "fail" && lineIdx === 0) {
    return {
      key: "bab-fail",
      noHead: true,
      body: <BabFailGuide />,
    };
  }
  if (chapterId === "fail" && lineIdx === 1) {
    return {
      key: "aqsam-fail",
      noHead: true,
      body: <AqsamFailGuide />,
    };
  }
  if (chapterId === "fail" && lineIdx === 3) {
    return {
      key: "fail-mudmar-anwa",
      noHead: true,
      body: <FailMudmarAnwaGuide />,
    };
  }
  if (chapterId === "naib-fail" && lineIdx === 0) {
    return {
      key: "naib-fail",
      noHead: true,
      body: <NaibFailGuide />,
    };
  }
  if (chapterId === "naib-fail" && lineIdx === 1) {
    return {
      key: "taghyir-fil",
      noHead: true,
      body: <TaghyirFilGuide />,
    };
  }
  if (chapterId === "naib-fail" && lineIdx === 3) {
    return {
      key: "aqsam-naib-fail",
      noHead: true,
      body: <AqsamNaibFailGuide />,
    };
  }
  if (chapterId === "mubtada-khabar" && lineIdx === 0) {
    return {
      key: "mubtada-khabar",
      noHead: true,
      body: <MubtadaKhabarGuide />,
    };
  }
  if (chapterId === "mubtada-khabar" && lineIdx === 3) {
    return {
      key: "mubtada-dhahir-mudmar",
      noHead: true,
      body: <MubtadaDhahirMudmarGuide />,
    };
  }
  if (chapterId === "mubtada-khabar" && lineIdx === 7) {
    return {
      key: "aqsam-khabar",
      noHead: true,
      body: <AqsamKhabarGuide />,
    };
  }
  if (chapterId === "awamil-mubtada" && lineIdx === 0) {
    return {
      key: "nawasikh-overview",
      noHead: true,
      body: <NawasikhOverviewGuide />,
    };
  }
  if (chapterId === "awamil-mubtada" && lineIdx === 1) {
    return {
      key: "kana-akhawat",
      noHead: true,
      body: <KanaAkhawatGuide />,
    };
  }
  if (chapterId === "awamil-mubtada" && lineIdx === 5) {
    return {
      key: "inna-akhawat",
      noHead: true,
      body: <InnaAkhawatGuide />,
    };
  }
  if (chapterId === "awamil-mubtada" && lineIdx === 9) {
    return {
      key: "zanna-akhawat",
      noHead: true,
      body: <ZannaAkhawatGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 0) {
    return {
      key: "afal-anwa",
      noHead: true,
      body: <AfalAnwaGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 2) {
    return {
      key: "afal-ahkam",
      noHead: true,
      body: <AfalAhkamGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 3) {
    return {
      key: "amr-binaa",
      noHead: true,
      body: <AmrBinaaGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 4) {
    return {
      key: "mudari-letters",
      noHead: true,
      body: <MudariLettersGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 6) {
    return {
      key: "hukm-mudari",
      noHead: true,
      body: <HukmMudariGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 7) {
    return {
      key: "nawasib-mudari",
      noHead: true,
      body: <NawasibMudariGuide />,
    };
  }
  if (chapterId === "afal" && lineIdx === 8) {
    return {
      key: "jawazim-mudari",
      noHead: true,
      body: <JawazimMudariGuide />,
    };
  }
  if (chapterId === "mansubat" && lineIdx === 0) {
    return {
      key: "mansubat-anwa",
      noHead: true,
      body: <MansubatAnwaGuide />,
    };
  }
  if (chapterId === "mafool-bih" && lineIdx === 0) {
    return {
      key: "bab-mafool-bih",
      noHead: true,
      body: <BabMafoolBihiGuide />,
    };
  }
  if (chapterId === "mafool-bih" && lineIdx === 2) {
    return {
      key: "aqsam-mafool-bih",
      noHead: true,
      body: <AqsamMafoolBihiGuide />,
    };
  }
  if (chapterId === "mafool-bih" && lineIdx === 5) {
    return {
      key: "mudmar-muttasil-mafool",
      noHead: true,
      body: <MudmarMuttasilMafoolGuide />,
    };
  }
  if (chapterId === "mafool-bih" && lineIdx === 6) {
    return {
      key: "mudmar-munfasil-mafool",
      noHead: true,
      body: <MudmarMunfasilMafoolGuide />,
    };
  }
  if (chapterId === "masdar" && lineIdx === 0) {
    return {
      key: "masdar-mafool-mutlaq",
      noHead: true,
      body: <MasdarMafoolMutlaqGuide />,
    };
  }
  if (chapterId === "masdar" && lineIdx === 2) {
    return {
      key: "anwa-mafool-mutlaq",
      noHead: true,
      body: <AnwaMafoolMutlaqGuide />,
    };
  }
  if (chapterId === "zarf" && lineIdx === 0) {
    return {
      key: "zarf-zaman",
      noHead: true,
      body: <ZarfZamanGuide />,
    };
  }
  if (chapterId === "zarf" && lineIdx === 2) {
    return {
      key: "zarf-makan",
      noHead: true,
      body: <ZarfMakanGuide />,
    };
  }
  if (chapterId === "majrurat" && lineIdx === 0) {
    return {
      key: "majrurat-overview",
      noHead: true,
      body: <MajruratOverviewGuide />,
    };
  }
  if (chapterId === "majrurat" && lineIdx === 1) {
    return {
      key: "majrurat-particles",
      noHead: true,
      body: <MajruratParticlesGuide />,
    };
  }
  if (chapterId === "majrurat" && lineIdx === 2) {
    return {
      key: "majrurat-idafa",
      noHead: true,
      body: <MajruratIdafaGuide />,
    };
  }
  if (chapterId === "majrurat" && lineIdx === 5) {
    return {
      key: "majrurat-follower",
      noHead: true,
      body: <MajruratFollowerGuide />,
    };
  }
  if (chapterId === "mafool-maah" && lineIdx === 0) {
    return {
      key: "mafool-maah-definition",
      noHead: true,
      body: <MafoolMaahGuide />,
    };
  }
  if (chapterId === "mafool-maah" && lineIdx === 1) {
    return {
      key: "mafool-maah-choice",
      noHead: true,
      body: <MafoolMaahChoiceGuide />,
    };
  }
  if (chapterId === "mafool-maah" && lineIdx === 2) {
    return {
      key: "mafool-maah-required",
      noHead: true,
      body: <MafoolMaahRequiredGuide />,
    };
  }
  if (chapterId === "mafool-ajli" && lineIdx === 0) {
    return {
      key: "mafool-ajli-definition",
      noHead: true,
      body: <MafoolAjliGuide />,
    };
  }
  if (chapterId === "mafool-ajli" && lineIdx === 1) {
    return {
      key: "mafool-ajli-states",
      noHead: true,
      body: <MafoolAjliStatesGuide />,
    };
  }
  if (chapterId === "munada" && lineIdx === 0) {
    return {
      key: "munada-types",
      noHead: true,
      body: <MunadaTypesGuide />,
    };
  }
  if (chapterId === "munada" && lineIdx === 1) {
    return {
      key: "munada-ruling",
      noHead: true,
      body: <MunadaRulingGuide />,
    };
  }
  if (chapterId === "la-nafiya" && lineIdx === 0) {
    return {
      key: "la-nafiya-conditions",
      noHead: true,
      body: <LaNafiyaConditionsGuide />,
    };
  }
  if (chapterId === "la-nafiya" && lineIdx === 2) {
    return {
      key: "la-nafiya-cancelled",
      noHead: true,
      body: <LaNafiyaCancelledGuide />,
    };
  }
  if (chapterId === "la-nafiya" && lineIdx === 4) {
    return {
      key: "la-nafiya-repeated",
      noHead: true,
      body: <LaNafiyaRepeatedGuide />,
    };
  }
  if (chapterId === "tamyiz" && lineIdx === 0) {
    return {
      key: "tamyiz-definition",
      noHead: true,
      body: <TamyizDefinitionGuide />,
    };
  }
  if (chapterId === "tamyiz" && lineIdx === 3) {
    return {
      key: "tamyiz-conditions",
      noHead: true,
      body: <TamyizConditionsGuide />,
    };
  }
  if (chapterId === "hal" && lineIdx === 0) {
    return {
      key: "hal-definition",
      noHead: true,
      body: <HalDefinitionGuide />,
    };
  }
  if (chapterId === "hal" && lineIdx === 2) {
    return {
      key: "hal-conditions",
      noHead: true,
      body: <HalConditionsGuide />,
    };
  }
  if (chapterId === "hal" && lineIdx === 3) {
    return {
      key: "hal-exercise-vocab",
      noHead: true,
      slot: "drill",
      body: <HalExerciseVocabGuide />,
    };
  }
  if (chapterId === "istithna" && lineIdx === 0) {
    return [
      {
        key: "istithna-overview",
        noHead: true,
        body: <IstithnaOverviewGuide />,
      },
      {
        key: "mustathna-illa-ruling",
        noHead: true,
        body: <MustathnaIllaRulingGuide />,
      },
    ];
  }
  if (chapterId === "istithna" && lineIdx === 2) {
    return {
      key: "mustathna-state2-deepdive",
      noHead: true,
      body: <MustathnaState2DeepdiveGuide />,
    };
  }
  if (chapterId === "istithna" && lineIdx === 4) {
    return {
      key: "mustathna-state3-deepdive",
      noHead: true,
      body: <MustathnaState3DeepdiveGuide />,
    };
  }
  if (chapterId === "naat" && lineIdx === 0) {
    return {
      key: "naat-agreement",
      noHead: true,
      body: <NaatAgreementGuide />,
    };
  }
  if (chapterId === "naat" && lineIdx === 2) {
    return {
      key: "marifa-nakira",
      noHead: true,
      body: <MarifaNakiraGuide />,
    };
  }
  if (chapterId === "atf" && lineIdx === 0) {
    return {
      key: "atf-particles",
      noHead: true,
      body: <AtfParticlesGuide />,
    };
  }
  if (chapterId === "atf" && lineIdx === 1) {
    return {
      key: "atf-ruling",
      noHead: true,
      body: <AtfRulingGuide />,
    };
  }
  if (chapterId === "tawkid" && lineIdx === 0) {
    return {
      key: "tawkid-kinds",
      noHead: true,
      body: <TawkidKindsGuide />,
    };
  }
  if (chapterId === "tawkid" && lineIdx === 1) {
    return {
      key: "tawkid-words",
      noHead: true,
      body: <TawkidWordsGuide />,
    };
  }
  if (chapterId === "badal" && lineIdx === 0) {
    return {
      key: "badal-ruling",
      noHead: true,
      body: <BadalRulingGuide />,
    };
  }
  if (chapterId === "badal" && lineIdx === 1) {
    return {
      key: "badal-types",
      noHead: true,
      body: <BadalTypesGuide />,
    };
  }
  if (chapterId === "istithna" && lineIdx === 5) {
    return [
      {
        key: "mustathna-ghayru",
        noHead: true,
        body: <MustathnaGhayruCommentaryGuide />,
      },
      {
        key: "mustathna-khala-ada-hasha",
        noHead: true,
        body: <MustathnaKhalaAdaHashaGuide />,
      },
    ];
  }
  return null;
}

/**
 * Flatten explanation guides for one or more matn lines.
 * Drills are excluded unless includeDrills is true.
 */
export function guidesForLines(
  chapterId,
  lineIdxs,
  { includeDrills = false } = {}
) {
  if (!chapterId || !lineIdxs?.length) return [];
  const out = [];
  const seen = new Set();
  for (const idx of lineIdxs) {
    const raw = guideAfterLine(chapterId, idx);
    const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
    for (const item of list) {
      if (!item?.key) continue;
      if (!includeDrills && item.slot === "drill") continue;
      if (seen.has(item.key)) continue;
      seen.add(item.key);
      out.push(item);
    }
  }
  return out;
}
