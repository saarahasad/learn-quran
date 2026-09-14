# -*- coding: utf-8 -*-
from pathlib import Path

path = Path(__file__).resolve().parent.parent / "src/data/tuhfat/alamatIrab.js"
text = path.read_text(encoding="utf-8")

replacements = [
    (
        '      "أَمَّا جَمْعُ الْمُؤَنَّثِ السَّالِمِ فَهُوَ: مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَتَاءٍ فِي آخِرِهِ، نَحْوُ: زَيْنَبَاتٌ، وَفَاطِمَاتٌ، وَحَمَامَاتٌ. فَكُلُّ وَاحِدٍ مِنْ هَذِهِ مَرْفُoعٌ، وَعَلَامَةُ رَfْعِهِ الضَّmَّةُ الظَّاهِrَةُ.³⁷",\n      "As for the sound feminine plural it is that which indicates towards more than two with the addition of the letters alif and tāʾ at the end of the word.³⁷ Examples being: Zaynabs, Fāṭimahs and doves. Each one of these is marfūʿ, and the sign of its rafʿ is the explicit ḍammah.",',
        '      "أَمَّا جَمْعُ الْMُؤَnَّthِ السَّalِmِ fَhُo: mَa dَلَّ عَلَى أَkْthَrَ mín ithnatayni biziyādat alifin wa tā\'in fī ākharihi, naḥwu: (zaynabāt), wa (fāṭimāt), wa (ḥammāmāt). Taqūlu: (jā\'a al-zaynabāt) wa (sāfara al-fāṭimāt) fa-al-zaynabāt wa-al-fāṭimāt marfū\'ān, wa \'alāmatu raf\'ihimā al-ḍammatu al-ẓāhiratu, wa lā takūnu al-ḍammatu muqaddaratan fī jam\'i al-mu\'annathi al-sālimi illā \'inda iḍāfatihi li-yā\'i al-mutakallimi naḥwu: (hādhihi shajaratī wa baqarātī).",\n      "As for the sound feminine plural it is that which indicates towards more than two with the addition of the letters alif and tāʾ at the end of the word.³⁷ Examples being: (Zaynabāt), (Fāṭimāt) and (ḥammāmāt). You say: (The Zaynabs came) and (The Fāṭimahs travelled)—al-Zaynabāt and al-Fāṭimāt are marfūʿ, and the sign of their rafʿ is the explicit ḍammah. The implicit ḍammah does not arise in the sound feminine plural except when it is connected in a possessive compound to the yā of the first person singular, e.g. (These are my trees and my cows).",',
    ),
]

print('Use splice instead')
