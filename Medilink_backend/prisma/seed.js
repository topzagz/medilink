const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const hashedPassword = bcrypt.hashSync("123456", 10);

const programData = [
  {
    name: "Basic Annual Checkup",
    description:
      "Complete physical examination with standard blood panel, blood pressure, BMI assessment, and doctor consultation.",
    price: 3500.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/cancer_screening_package_banner_rpkpi4.jpg",
  },
  {
    name: "Comprehensive Health Screening",
    description:
      "Full-body health assessment including advanced blood work, cardiovascular testing, vision and hearing tests, and detailed health report.",
    price: 12500.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/comprehensive_health_screening_banner_xlvl4i.jpg",
  },
  {
    name: "Executive Health Package",
    description:
      "Premium health screening with full body scan, comprehensive blood analysis, stress test, nutritional assessment, and personalized health plan.",
    price: 25000.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368421/health_checkup_package_banner_msva4n.jpg",
  },
  {
    name: "Family Health Plan",
    description:
      "Annual checkups for a family of four, including basic health screenings, vaccinations, and pediatric consultations.",
    price: 18000.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/family_health_plan_banner_de4flr.jpg",
  },
  {
    name: "Senior Wellness Program",
    description:
      "Specialized health package for seniors including bone density scan, cognitive assessment, prescription review, and specialized geriatric consultation.",
    price: 9500.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/senior_wellness_program_banner_q4rx1y.jpg",
  },
  {
    name: "Women's Health Checkup",
    description:
      "Comprehensive women's health screening including mammogram, pap smear, hormone level testing, and gynecological consultation.",
    price: 8500.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/womens_health_checkup_banner_jducxh.jpg",
  },
  {
    name: "Men's Health Checkup",
    description:
      "Specialized package for men including prostate screening, testosterone level testing, cardiac risk assessment, and urological consultation.",
    price: 7800.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/mens_health_checkup_banner_gsmaxk.jpg",
  },
  {
    name: "Heart & Vascular Screening",
    description:
      "Focused cardiovascular assessment with ECG, echocardiogram, coronary calcium scoring, and consultation with a cardiologist.",
    price: 15000.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/heart_vascular_screening_banner_vasvn7.jpg",
  },
  {
    name: "Diabetes Prevention & Management",
    description:
      "Comprehensive screening for diabetes risk factors, insulin resistance testing, nutritional counseling, and personalized management plan.",
    price: 6500.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/diabetes_prevention_management_banner_esfp7z.jpg",
  },
  {
    name: "Corporate Wellness Package",
    description:
      "Group health screening package for companies including basic health assessments, stress evaluations, and health education workshops.",
    price: 2800.0,
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/corporate_wellness_package_banner_eg24lj.jpg",
  },
];

const doctorData = [
  {
    firstname: "สมชาย",
    lastname: "พานิช",
    specialtyId: 1,
    hospitalId: 1,
    experience: "10 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg",
  },
  {
    firstname: "ณัฐชา",
    lastname: "สมิธ",
    specialtyId: 2,
    hospitalId: 2,
    experience: "8 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/doctor-1_ptalux.jpg",
  },
  {
    firstname: "ไมเคิล",
    lastname: "พงษ์ประทีป",
    specialtyId: 3,
    hospitalId: 1,
    experience: "12 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-6_hzxohp.jpg",
  },
  {
    firstname: "เอมิลี",
    lastname: "ศิริวิทย์",
    specialtyId: 4,
    hospitalId: 3,
    experience: "5 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-5_q5sqqk.jpg",
  },
  {
    firstname: "เดวิด",
    lastname: "วิลเลียมส์",
    specialtyId: 1,
    hospitalId: 2,
    experience: "15 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg",
  },
  {
    firstname: "โซเฟีย",
    lastname: "มิลเลอร์",
    specialtyId: 2,
    hospitalId: 3,
    experience: "7 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-3_s9lqmy.jpg",
  },
  {
    firstname: "แดเนียล",
    lastname: "เทย์เลอร์",
    specialtyId: 3,
    hospitalId: 1,
    experience: "10 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-6_hzxohp.jpg",
  },
  {
    firstname: "โอลิเวีย",
    lastname: "แอนเดอร์สัน",
    specialtyId: 4,
    hospitalId: 2,
    experience: "9 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-2_ywmkvi.jpg",
  },
  {
    firstname: "เจมส์",
    lastname: "ธomas",
    specialtyId: 1,
    hospitalId: 3,
    experience: "11 Years",
    profileImg:
      "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg",
  },
  //   {
  //     firstname: "อิศรา",
  //     lastname: "สมคิด",
  //     specialtyId: 2,
  //     hospitalId: 1,
  //     experience: "6 ปี",
  //     profileImg: "https://example.com/images/itsara_somkid.jpg",
  //   },
  //   {
  //     firstname: "อรรถชัย",
  //     lastname: "ชัยประทีป",
  //     specialtyId: 3,
  //     hospitalId: 2,
  //     experience: "13 ปี",
  //     profileImg: "https://example.com/images/attachai_chaiprateep.jpg",
  //   },
  //   {
  //     firstname: "มิเชล",
  //     lastname: "หิรัญพงษ์",
  //     specialtyId: 4,
  //     hospitalId: 5,
  //     experience: "7 ปี",
  //     profileImg: "https://example.com/images/michelle_hiranpong.jpg",
  //   },
  //   {
  //     firstname: "ชนินทร์",
  //     lastname: "ยิ้มมา",
  //     specialtyId: 2,
  //     hospitalId: 4,
  //     experience: "14 ปี",
  //     profileImg: "https://example.com/images/chanin_yimma.jpg",
  //   },
  //   {
  //     firstname: "นิตยา",
  //     lastname: "ประสาร",
  //     specialtyId: 3,
  //     hospitalId: 5,
  //     experience: "9 ปี",
  //     profileImg: "https://example.com/images/nitaya_prasan.jpg",
  //   },
  //   {
  //     firstname: "รวิศ",
  //     lastname: "ประทีป",
  //     specialtyId: 1,
  //     hospitalId: 4,
  //     experience: "8 ปี",
  //     profileImg: "https://example.com/images/ravis_prateep.jpg",
  //   },
  //   {
  //     firstname: "ศิวกร",
  //     lastname: "เลิศภาณุ",
  //     specialtyId: 4,
  //     hospitalId: 2,
  //     experience: "6 ปี",
  //     profileImg: "https://example.com/images/sivakorn_lertphan.jpg",
  //   },
  //   {
  //     firstname: "ธีรเทพ",
  //     lastname: "ราชวงศ์",
  //     specialtyId: 2,
  //     hospitalId: 1,
  //     experience: "10 ปี",
  //     profileImg: "https://example.com/images/teerathap_rachawong.jpg",
  //   },
  //   {
  //     firstname: "อมรรัตน์",
  //     lastname: "สมภาร",
  //     specialtyId: 3,
  //     hospitalId: 2,
  //     experience: "13 ปี",
  //     profileImg: "https://example.com/images/amornrat_sompharn.jpg",
  //   },
  //   {
  //     firstname: "ชลธิชา",
  //     lastname: "มานะ",
  //     specialtyId: 1,
  //     hospitalId: 3,
  //     experience: "9 ปี",
  //     profileImg: "https://example.com/images/chonthicha_mana.jpg",
  //   },
  //   {
  //     firstname: "ดาริน",
  //     lastname: "อรุณรุ่ง",
  //     specialtyId: 4,
  //     hospitalId: 4,
  //     experience: "12 ปี",
  //     profileImg: "https://example.com/images/darin_arunrung.jpg",
  //   },
  //   {
  //     firstname: "อุดม",
  //     lastname: "กุลยาม",
  //     specialtyId: 2,
  //     hospitalId: 3,
  //     experience: "5 ปี",
  //     profileImg: "https://example.com/images/udom_kulyam.jpg",
  //   },
  //   {
  //     firstname: "ภูวดล",
  //     lastname: "โสภา",
  //     specialtyId: 3,
  //     hospitalId: 2,
  //     experience: "8 ปี",
  //     profileImg: "https://example.com/images/phuwadol_sopha.jpg",
  //   },
  //   {
  //     firstname: "ฐิติรัตน์",
  //     lastname: "สมบูรณ์",
  //     specialtyId: 1,
  //     hospitalId: 5,
  //     experience: "10 ปี",
  //     profileImg: "https://example.com/images/thitirat_somboon.jpg",
  //   },
  //   {
  //     firstname: "มุทิตา",
  //     lastname: "โสภณ",
  //     specialtyId: 4,
  //     hospitalId: 1,
  //     experience: "7 ปี",
  //     profileImg: "https://example.com/images/mutita_sopon.jpg",
  //   },
  //   {
  //     firstname: "พิมพ์ชนก",
  //     lastname: "ทองดี",
  //     specialtyId: 2,
  //     hospitalId: 4,
  //     experience: "12 ปี",
  //     profileImg: "https://example.com/images/pimchanok_thongdee.jpg",
  //   },
  //   {
  //     firstname: "ชนะชัย",
  //     lastname: "ภูมิภัทร",
  //     specialtyId: 1,
  //     hospitalId: 3,
  //     experience: "9 ปี",
  //     profileImg: "https://example.com/images/chanachai_phumiphat.jpg",
  //   },
  //   {
  //     firstname: "สิริกร",
  //     lastname: "บูรณสิทธิ์",
  //     specialtyId: 3,
  //     hospitalId: 2,
  //     experience: "8 ปี",
  //     profileImg: "https://example.com/images/sirikan_buranasit.jpg",
  //   },
  //   {
  //     firstname: "นวลทิพย์",
  //     lastname: "แก้วมณี",
  //     specialtyId: 4,
  //     hospitalId: 5,
  //     experience: "13 ปี",
  //     profileImg: "https://example.com/images/nualthip_kaewmanee.jpg",
  //   },
  //   {
  //     firstname: "วีรชัย",
  //     lastname: "สุขสม",
  //     specialtyId: 1,
  //     hospitalId: 2,
  //     experience: "11 ปี",
  //     profileImg: "https://example.com/images/veerachai_suksom.jpg",
  //   },
  //   {
  //     firstname: "ขวัญฤดี",
  //     lastname: "บำรุง",
  //     specialtyId: 2,
  //     hospitalId: 3,
  //     experience: "10 ปี",
  //     profileImg: "https://example.com/images/kwanrdee_bamrung.jpg",
  //   },
  //   {
  //     firstname: "ยิ่งยง",
  //     lastname: "ดวงดี",
  //     specialtyId: 3,
  //     hospitalId: 1,
  //     experience: "9 ปี",
  //     profileImg: "https://example.com/images/yingyong_duangdee.jpg",
  //   },
  //   {
  //     firstname: "มินตรา",
  //     lastname: "วิชัย",
  //     specialtyId: 4,
  //     hospitalId: 5,
  //     experience: "6 ปี",
  //     profileImg: "https://example.com/images/mintra_wichai.jpg",
  //   },
  //   {
  //     firstname: "ธัญญรัตน์",
  //     lastname: "พึ่งบุญ",
  //     specialtyId: 2,
  //     hospitalId: 4,
  //     experience: "12 ปี",
  //     profileImg: "https://example.com/images/tanyarat_phungboon.jpg",
  //   },
  //   {
  //     firstname: "พัชรินทร์",
  //     lastname: "ชัยรัตน์",
  //     specialtyId: 1,
  //     hospitalId: 3,
  //     experience: "7 ปี",
  //     profileImg: "https://example.com/images/patcharin_chairat.jpg",
  //   },
  //   {
  //     firstname: "ปรัชญา",
  //     lastname: "ศรีธวัช",
  //     specialtyId: 3,
  //     hospitalId: 2,
  //     experience: "9 ปี",
  //     profileImg: "https://example.com/images/prachaya_sreethawut.jpg",
  //     experience: "6 Years",
  //     profileImg: "https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/doctor-1_ptalux.jpg",
  //   },
];

const specialtyData = [
  { specialtyName: "โรคหัวใจ" },
  { specialtyName: "โรคประสาท" },
  { specialtyName: "ศัลยกรรมกระดูกและข้อ" },
  { specialtyName: "กุมารเวชศาสตร์" },
  { specialtyName: "ผิวหนัง" },
  { specialtyName: "นรีเวชศาสตร์" },
  { specialtyName: "จักษุวิทยา" },
  { specialtyName: "มะเร็งวิทยา" },
  { specialtyName: "ระบบทางเดินอาหาร" },
  { specialtyName: "ต่อมไร้ท่อ" },
];

const hospitalData = [
  {
    "name": "โรงพยาบาลศิริราช",
    "contactInfo": "052-220-4392",
    "locationId": 1,
    "profileImg": "https://example.com/images/hospital_1.jpg"
  },
  {
    "name": "โรงพยาบาลพระมงกุฎเกล้า",
    "contactInfo": "044-456-1822",
    "locationId": 2,
    "profileImg": "https://example.com/images/hospital_2.jpg"
  },
  {
    "name": "โรงพยาบาลมหาราชนครเชียงใหม่",
    "contactInfo": "074-995-9845",
    "locationId": 3,
    "profileImg": "https://example.com/images/hospital_3.jpg"
  },
  {
    "name": "โรงพยาบาลนครพิงค์",
    "contactInfo": "026-577-4818",
    "locationId": 4,
    "profileImg": "https://example.com/images/hospital_4.jpg"
  },
  {
    "name": "โรงพยาบาลมหาราชนครราชสีมา",
    "contactInfo": "092-871-6616",
    "locationId": 5,
    "profileImg": "https://example.com/images/hospital_5.jpg"
  },
  {
    "name": "โรงพยาบาลขอนแก่น",
    "contactInfo": "040-627-5906",
    "locationId": 6,
    "profileImg": "https://example.com/images/hospital_6.jpg"
  },
  {
    "name": "โรงพยาบาลอุดรธานี",
    "contactInfo": "049-788-4826",
    "locationId": 7,
    "profileImg": "https://example.com/images/hospital_7.jpg"
  },
  {
    "name": "โรงพยาบาลสรรพสิทธิประสงค์",
    "contactInfo": "098-497-3022",
    "locationId": 8,
    "profileImg": "https://example.com/images/hospital_8.jpg"
  },
  {
    "name": "โรงพยาบาลสุราษฎร์ธานี",
    "contactInfo": "044-464-7252",
    "locationId": 9,
    "profileImg": "https://example.com/images/hospital_9.jpg"
  },
  {
    "name": "โรงพยาบาลสงขลานครินทร์",
    "contactInfo": "065-917-8284",
    "locationId": 10,
    "profileImg": "https://example.com/images/hospital_10.jpg"
  },
  {
    "name": "โรงพยาบาลหาดใหญ่",
    "contactInfo": "022-568-5588",
    "locationId": 11,
    "profileImg": "https://example.com/images/hospital_11.jpg"
  },
  {
    "name": "โรงพยาบาลยะลา",
    "contactInfo": "080-741-7567",
    "locationId": 12,
    "profileImg": "https://example.com/images/hospital_12.jpg"
  },
  {
    "name": "โรงพยาบาลราชบุรี",
    "contactInfo": "073-989-5378",
    "locationId": 13,
    "profileImg": "https://example.com/images/hospital_13.jpg"
  },
  {
    "name": "โรงพยาบาลนครปฐม",
    "contactInfo": "038-778-5304",
    "locationId": 14,
    "profileImg": "https://example.com/images/hospital_14.jpg"
  },
  {
    "name": "โรงพยาบาลสมุทรสาคร",
    "contactInfo": "073-456-8018",
    "locationId": 15,
    "profileImg": "https://example.com/images/hospital_15.jpg"
  },
  {
    "name": "โรงพยาบาลชลบุรี",
    "contactInfo": "037-999-6720",
    "locationId": 16,
    "profileImg": "https://example.com/images/hospital_16.jpg"
  },
  {
    "name": "โรงพยาบาลระยอง",
    "contactInfo": "093-997-8970",
    "locationId": 17,
    "profileImg": "https://example.com/images/hospital_17.jpg"
  },
  {
    "name": "โรงพยาบาลตราด",
    "contactInfo": "090-132-8145",
    "locationId": 18,
    "profileImg": "https://example.com/images/hospital_18.jpg"
  },
  {
    "name": "โรงพยาบาลจันทบุรี",
    "contactInfo": "025-999-4615",
    "locationId": 19,
    "profileImg": "https://example.com/images/hospital_19.jpg"
  },
  {
    "name": "โรงพยาบาลเพชรบูรณ์",
    "contactInfo": "021-925-4440",
    "locationId": 20,
    "profileImg": "https://example.com/images/hospital_20.jpg"
  },
  {
    "name": "โรงพยาบาลพิษณุโลก",
    "contactInfo": "025-188-7065",
    "locationId": 21,
    "profileImg": "https://example.com/images/hospital_21.jpg"
  },
  {
    "name": "โรงพยาบาลอุตรดิตถ์",
    "contactInfo": "069-527-2045",
    "locationId": 22,
    "profileImg": "https://example.com/images/hospital_22.jpg"
  },
  {
    "name": "โรงพยาบาลแพร่",
    "contactInfo": "056-607-4183",
    "locationId": 23,
    "profileImg": "https://example.com/images/hospital_23.jpg"
  },
  {
    "name": "โรงพยาบาลน่าน",
    "contactInfo": "064-310-5500",
    "locationId": 24,
    "profileImg": "https://example.com/images/hospital_24.jpg"
  },
  {
    "name": "โรงพยาบาลเชียงรายประชานุเคราะห์",
    "contactInfo": "050-809-4481",
    "locationId": 25,
    "profileImg": "https://example.com/images/hospital_25.jpg"
  },
  {
    "name": "โรงพยาบาลแม่ฮ่องสอน",
    "contactInfo": "022-325-7244",
    "locationId": 26,
    "profileImg": "https://example.com/images/hospital_26.jpg"
  },
  {
    "name": "โรงพยาบาลลำพูน",
    "contactInfo": "088-788-3748",
    "locationId": 27,
    "profileImg": "https://example.com/images/hospital_27.jpg"
  },
  {
    "name": "โรงพยาบาลพะเยา",
    "contactInfo": "063-100-2719",
    "locationId": 28,
    "profileImg": "https://example.com/images/hospital_28.jpg"
  },
  {
    "name": "โรงพยาบาลลำปาง",
    "contactInfo": "024-979-9127",
    "locationId": 29,
    "profileImg": "https://example.com/images/hospital_29.jpg"
  },
  {
    "name": "โรงพยาบาลบุรีรัมย์",
    "contactInfo": "056-664-7547",
    "locationId": 30,
    "profileImg": "https://example.com/images/hospital_30.jpg"
  },
  {
    "name": "โรงพยาบาลสุรินทร์",
    "contactInfo": "056-963-8500",
    "locationId": 31,
    "profileImg": "https://example.com/images/hospital_31.jpg"
  },
  {
    "name": "โรงพยาบาลศรีสะเกษ",
    "contactInfo": "086-841-6109",
    "locationId": 32,
    "profileImg": "https://example.com/images/hospital_32.jpg"
  },
  {
    "name": "โรงพยาบาลร้อยเอ็ด",
    "contactInfo": "027-782-1921",
    "locationId": 33,
    "profileImg": "https://example.com/images/hospital_33.jpg"
  },
  {
    "name": "โรงพยาบาลยโสธร",
    "contactInfo": "084-137-1307",
    "locationId": 34,
    "profileImg": "https://example.com/images/hospital_34.jpg"
  },
  {
    "name": "โรงพยาบาลมุกดาหาร",
    "contactInfo": "060-778-3267",
    "locationId": 35,
    "profileImg": "https://example.com/images/hospital_35.jpg"
  },
  {
    "name": "โรงพยาบาลนครพนม",
    "contactInfo": "058-928-3845",
    "locationId": 36,
    "profileImg": "https://example.com/images/hospital_36.jpg"
  },
  {
    "name": "โรงพยาบาลสกลนคร",
    "contactInfo": "054-108-9517",
    "locationId": 37,
    "profileImg": "https://example.com/images/hospital_37.jpg"
  },
  {
    "name": "โรงพยาบาลหนองคาย",
    "contactInfo": "089-945-1998",
    "locationId": 38,
    "profileImg": "https://example.com/images/hospital_38.jpg"
  },
  {
    "name": "โรงพยาบาลบึงกาฬ",
    "contactInfo": "086-227-3229",
    "locationId": 39,
    "profileImg": "https://example.com/images/hospital_39.jpg"
  },
  {
    "name": "โรงพยาบาลเลย",
    "contactInfo": "050-965-8256",
    "locationId": 40,
    "profileImg": "https://example.com/images/hospital_40.jpg"
  },
  {
    "name": "โรงพยาบาลอำนาจเจริญ",
    "contactInfo": "026-409-7088",
    "locationId": 41,
    "profileImg": "https://example.com/images/hospital_41.jpg"
  },
  {
    "name": "โรงพยาบาลชัยภูมิ",
    "contactInfo": "056-402-1490",
    "locationId": 42,
    "profileImg": "https://example.com/images/hospital_42.jpg"
  },
  {
    "name": "โรงพยาบาลกาฬสินธุ์",
    "contactInfo": "063-668-3063",
    "locationId": 43,
    "profileImg": "https://example.com/images/hospital_43.jpg"
  },
  {
    "name": "โรงพยาบาลแม่สอด",
    "contactInfo": "068-710-7530",
    "locationId": 44,
    "profileImg": "https://example.com/images/hospital_44.jpg"
  },
  {
    "name": "โรงพยาบาลตาก",
    "contactInfo": "088-198-6705",
    "locationId": 45,
    "profileImg": "https://example.com/images/hospital_45.jpg"
  },
  {
    "name": "โรงพยาบาลกำแพงเพชร",
    "contactInfo": "087-796-9308",
    "locationId": 46,
    "profileImg": "https://example.com/images/hospital_46.jpg"
  },
  {
    "name": "โรงพยาบาลสุโขทัย",
    "contactInfo": "096-620-5277",
    "locationId": 47,
    "profileImg": "https://example.com/images/hospital_47.jpg"
  },
  {
    "name": "โรงพยาบาลนครสวรรค์",
    "contactInfo": "047-278-2398",
    "locationId": 48,
    "profileImg": "https://example.com/images/hospital_48.jpg"
  },
  {
    "name": "โรงพยาบาลอุทัยธานี",
    "contactInfo": "036-972-6387",
    "locationId": 49,
    "profileImg": "https://example.com/images/hospital_49.jpg"
  },
  {
    "name": "โรงพยาบาลสิงห์บุรี",
    "contactInfo": "092-163-5493",
    "locationId": 50,
    "profileImg": "https://example.com/images/hospital_50.jpg"
  }
];

const locationData = [
  {
    "latitude": 19.725508,
    "longitude": 102.999321,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลศิริราช จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 6.503676,
    "longitude": 102.141998,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลพระมงกุฎเกล้า จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 14.233394,
    "longitude": 99.013556,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลมหาราชนครเชียงใหม่ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 19.819622,
    "longitude": 102.909097,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลนครพิงค์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 9.111159,
    "longitude": 103.64637,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลมหาราชนครราชสีมา จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 13.066002,
    "longitude": 103.117233,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลขอนแก่น จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.203884,
    "longitude": 99.154834,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลอุดรธานี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 17.11395,
    "longitude": 102.206381,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสรรพสิทธิประสงค์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 11.454961,
    "longitude": 101.300819,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสุราษฎร์ธานี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 8.385075,
    "longitude": 103.813595,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสงขลานครินทร์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 19.270632,
    "longitude": 103.638269,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลหาดใหญ่ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 8.52705,
    "longitude": 103.824798,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลยะลา จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 14.121252,
    "longitude": 100.163452,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลราชบุรี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 10.982994,
    "longitude": 100.525304,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลนครปฐม จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 10.853424,
    "longitude": 100.661987,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสมุทรสาคร จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 6.271851,
    "longitude": 101.209196,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลชลบุรี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 17.982941,
    "longitude": 100.572235,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลระยอง จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 20.387365,
    "longitude": 103.669615,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลตราด จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 19.774855,
    "longitude": 100.332627,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลจันทบุรี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 5.984339,
    "longitude": 100.70428,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลเพชรบูรณ์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.93099,
    "longitude": 100.922667,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลพิษณุโลก จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.092418,
    "longitude": 101.465633,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลอุตรดิตถ์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 13.807915,
    "longitude": 101.646979,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลแพร่ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 6.386168,
    "longitude": 102.405665,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลน่าน จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 8.713395,
    "longitude": 101.715126,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลเชียงรายประชานุเคราะห์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 12.521268,
    "longitude": 103.786735,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลแม่ฮ่องสอน จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 18.354283,
    "longitude": 99.380989,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลลำพูน จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 13.54065,
    "longitude": 100.654187,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลพะเยา จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 6.939093,
    "longitude": 101.919667,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลลำปาง จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 14.600053,
    "longitude": 101.272716,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลบุรีรัมย์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 13.265542,
    "longitude": 101.08407,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสุรินทร์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 10.281472,
    "longitude": 103.493529,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลศรีสะเกษ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.278107,
    "longitude": 100.786325,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลร้อยเอ็ด จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.670511,
    "longitude": 98.768659,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลยโสธร จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 17.720381,
    "longitude": 103.771888,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลมุกดาหาร จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 13.299207,
    "longitude": 99.107912,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลนครพนม จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 17.030306,
    "longitude": 103.940474,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสกลนคร จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 8.934284,
    "longitude": 102.681456,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลหนองคาย จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 9.315244,
    "longitude": 101.213695,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลบึงกาฬ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 8.354495,
    "longitude": 100.19313,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลเลย จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 19.827907,
    "longitude": 101.213683,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลอำนาจเจริญ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 6.379571,
    "longitude": 100.423567,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลชัยภูมิ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 18.864301,
    "longitude": 103.139035,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลกาฬสินธุ์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 20.175495,
    "longitude": 100.315597,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลแม่สอด จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 14.433792,
    "longitude": 99.890574,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลตาก จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 16.30762,
    "longitude": 102.354179,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลกำแพงเพชร จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 14.964269,
    "longitude": 102.640342,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสุโขทัย จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 12.484023,
    "longitude": 101.437817,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลนครสวรรค์ จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 10.722388,
    "longitude": 99.720635,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลอุทัยธานี จังหวัดตัวอย่าง ประเทศไทย"
  },
  {
    "latitude": 12.431465,
    "longitude": 102.303594,
    "address": "ที่อยู่ตัวอย่างของ โรงพยาบาลสิงห์บุรี จังหวัดตัวอย่าง ประเทศไทย"
  }
];

const doctorScheduleData = [
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 1,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 2,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 3,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 4,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 5,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 6,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 7,
  },
  {
    day: "WEDNESDAY",
    doctorId: 1,
    timeId: 8,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 2,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 3,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 4,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 5,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 6,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 7,
  },
  {
    day: "TUESDAY",
    doctorId: 1,
    timeId: 8,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 2,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 3,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 4,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 5,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 6,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 7,
  },
  {
    day: "FRIDAY",
    doctorId: 1,
    timeId: 8,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 1,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 2,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 3,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 4,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 5,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 6,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 7,
  },
  {
    day: "THURSDAY",
    doctorId: 1,
    timeId: 8,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 2,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 3,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 4,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 5,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 6,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 7,
  },
  {
    day: "MONDAY",
    doctorId: 1,
    timeId: 8,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 9,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 10,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 11,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 12,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 13,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 14,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 15,
  },
  {
    day: "WEDNESDAY",
    doctorId: 2,
    timeId: 16,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 9,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 10,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 11,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 12,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 13,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 14,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 15,
  },
  {
    day: "TUESDAY",
    doctorId: 2,
    timeId: 16,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 9,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 10,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 11,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 12,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 13,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 14,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 15,
  },
  {
    day: "THURSDAY",
    doctorId: 2,
    timeId: 16,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 9,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 10,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 11,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 12,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 13,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 14,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 15,
  },
  {
    day: "FRIDAY",
    doctorId: 2,
    timeId: 16,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 9,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 10,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 11,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 12,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 13,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 14,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 15,
  },
  {
    day: "MONDAY",
    doctorId: 2,
    timeId: 16,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 17,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 18,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 19,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 20,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 21,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 22,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 23,
  },
  {
    day: "WEDNESDAY",
    doctorId: 3,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 17,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 18,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 19,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 20,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 21,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 22,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 23,
  },
  {
    day: "TUESDAY",
    doctorId: 3,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 17,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 18,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 19,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 20,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 21,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 22,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 23,
  },
  {
    day: "FRIDAY",
    doctorId: 3,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 17,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 18,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 19,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 20,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 21,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 22,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 23,
  },
  {
    day: "MONDAY",
    doctorId: 3,
    timeId: 1,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 17,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 18,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 19,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 20,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 21,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 22,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 23,
  },
  {
    day: "THURSDAY",
    doctorId: 3,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 2,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 3,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 4,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 5,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 6,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 7,
  },
  {
    day: "FRIDAY",
    doctorId: 4,
    timeId: 8,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 1,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 2,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 3,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 4,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 5,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 6,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 7,
  },
  {
    day: "WEDNESDAY",
    doctorId: 4,
    timeId: 8,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 2,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 3,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 4,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 5,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 6,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 7,
  },
  {
    day: "TUESDAY",
    doctorId: 4,
    timeId: 8,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 2,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 3,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 4,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 5,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 6,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 7,
  },
  {
    day: "MONDAY",
    doctorId: 4,
    timeId: 8,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 1,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 2,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 3,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 4,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 5,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 6,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 7,
  },
  {
    day: "THURSDAY",
    doctorId: 4,
    timeId: 8,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 9,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 10,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 11,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 12,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 13,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 14,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 15,
  },
  {
    day: "MONDAY",
    doctorId: 5,
    timeId: 16,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 9,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 10,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 11,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 12,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 13,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 14,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 15,
  },
  {
    day: "TUESDAY",
    doctorId: 5,
    timeId: 16,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 9,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 10,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 11,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 12,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 13,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 14,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 15,
  },
  {
    day: "WEDNESDAY",
    doctorId: 5,
    timeId: 16,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 9,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 10,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 11,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 12,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 13,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 14,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 15,
  },
  {
    day: "THURSDAY",
    doctorId: 5,
    timeId: 16,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 9,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 10,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 11,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 12,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 13,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 14,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 15,
  },
  {
    day: "FRIDAY",
    doctorId: 5,
    timeId: 16,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 17,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 18,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 19,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 20,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 21,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 22,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 23,
  },
  {
    day: "THURSDAY",
    doctorId: 6,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 17,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 18,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 19,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 20,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 21,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 22,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 23,
  },
  {
    day: "FRIDAY",
    doctorId: 6,
    timeId: 1,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 17,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 18,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 19,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 20,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 21,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 22,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 23,
  },
  {
    day: "WEDNESDAY",
    doctorId: 6,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 17,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 18,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 19,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 20,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 21,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 22,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 23,
  },
  {
    day: "TUESDAY",
    doctorId: 6,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 17,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 18,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 19,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 20,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 21,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 22,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 23,
  },
  {
    day: "MONDAY",
    doctorId: 6,
    timeId: 1,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 1,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 2,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 3,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 4,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 5,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 6,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 7,
  },
  {
    day: "THURSDAY",
    doctorId: 7,
    timeId: 8,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 1,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 2,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 3,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 4,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 5,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 6,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 7,
  },
  {
    day: "WEDNESDAY",
    doctorId: 7,
    timeId: 8,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 2,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 3,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 4,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 5,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 6,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 7,
  },
  {
    day: "FRIDAY",
    doctorId: 7,
    timeId: 8,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 2,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 3,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 4,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 5,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 6,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 7,
  },
  {
    day: "TUESDAY",
    doctorId: 7,
    timeId: 8,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 2,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 3,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 4,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 5,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 6,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 7,
  },
  {
    day: "MONDAY",
    doctorId: 7,
    timeId: 8,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 9,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 10,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 11,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 12,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 13,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 14,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 15,
  },
  {
    day: "FRIDAY",
    doctorId: 8,
    timeId: 16,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 9,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 10,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 11,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 12,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 13,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 14,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 15,
  },
  {
    day: "THURSDAY",
    doctorId: 8,
    timeId: 16,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 9,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 10,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 11,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 12,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 13,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 14,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 15,
  },
  {
    day: "WEDNESDAY",
    doctorId: 8,
    timeId: 16,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 9,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 10,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 11,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 12,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 13,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 14,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 15,
  },
  {
    day: "TUESDAY",
    doctorId: 8,
    timeId: 16,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 9,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 10,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 11,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 12,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 13,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 14,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 15,
  },
  {
    day: "MONDAY",
    doctorId: 8,
    timeId: 16,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 17,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 18,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 19,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 20,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 21,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 22,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 23,
  },
  {
    day: "THURSDAY",
    doctorId: 9,
    timeId: 1,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 17,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 18,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 19,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 20,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 21,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 22,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 23,
  },
  {
    day: "FRIDAY",
    doctorId: 9,
    timeId: 1,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 17,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 18,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 19,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 20,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 21,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 22,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 23,
  },
  {
    day: "WEDNESDAY",
    doctorId: 9,
    timeId: 1,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 17,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 18,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 19,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 20,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 21,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 22,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 23,
  },
  {
    day: "TUESDAY",
    doctorId: 9,
    timeId: 1,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 17,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 18,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 19,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 20,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 21,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 22,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 23,
  },
  {
    day: "MONDAY",
    doctorId: 9,
    timeId: 1,
  },

];

const timeData = [
  {
    startTime: new Date("2025-03-13T00:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T01:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T01:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T02:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T02:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T03:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T03:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T04:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T04:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T05:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T05:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T06:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T06:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T07:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T07:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T08:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T08:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T09:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T09:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T10:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T10:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T11:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T11:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T12:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T13:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T14:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T14:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T15:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T15:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T16:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T16:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T17:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T17:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T18:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T18:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T19:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T19:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T20:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T20:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T21:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T21:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T22:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T22:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T23:00:00Z"),
  },
  {
    startTime: new Date("2025-03-13T23:00:00Z"), // เวลา UTC
    endTime: new Date("2025-03-13T00:00:00Z"),
  },
];
console.log("DB seed...");

// async function run() {
//   await prisma.specialty.createMany({ data: specialtyData });
// }

// async function run() {
//   await prisma.location.createMany({ data: locationData });
// }
// async function run() {
//   await prisma.time.createMany({ data: timeData });
// }

// async function run() {
//   await prisma.hospital.createMany({ data: hospitalData });
// }

// async function run() {
//   await prisma.doctor.createMany({ data: doctorData });
// }
// async function run() {
//   await prisma.doctorSchedule.createMany({ data: doctorScheduleData });
// }
async function run() {
  await prisma.program.createMany({ data: programData });
  await prisma.time.createMany({ data: timeData });
  await prisma.specialty.createMany({ data: specialtyData });
  await prisma.location.createMany({ data: locationData });
  await prisma.hospital.createMany({ data: hospitalData });
  await prisma.doctor.createMany({ data: doctorData });
  await prisma.doctorSchedule.createMany({ data: doctorScheduleData });
}

run();

// ลำดับการ seed
// 1. location 2. specialty 3. time 4. hospital 5 doctor 6. doctor schedule
// command "npx prisma db seed"
