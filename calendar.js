// Календар на счетоводителя - JavaScript функционалност

// Данни за важните срокове през годината
const accountingDeadlines = {
    // Януари
    1: [
        { day: 1, description: "🇪🇺 ОФИЦИАЛНО ПРЕМИНАВАНЕ НА ЕВРО - Нова официална валута на България", type: "urgent", institution: "БНБ" },
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за декември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за декември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за декември", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за декември", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за декември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за декември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за декември", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за декември", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 31, description: "Промяна на вид осигуряване (самоосигуряващи се)", type: "important", institution: "НОИ" },
        { day: 31, description: "ЗМДТ: Патентен данък и туристически данък", type: "urgent", institution: "НАП" }
    ],
    // Февруари
    2: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за януари", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за януари", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за януари", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за януари", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за януари", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за януари", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за януари", type: "urgent", institution: "НОИ" },
        { day: 28, description: "ЗДДС: Дистанционни продажби за януари", type: "important", institution: "НАП" },
        { day: 28, description: "ЗДДФЛ: Справки по чл. 73 за изплатени доходи", type: "urgent", institution: "НАП" }
    ],
    // Март
    3: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за февруари", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за февруари", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за февруари", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за февруари", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за февруари", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за февруари", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за февруари", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за февруари", type: "important", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Годишна данъчна декларация с 5% отстъпка", type: "urgent", institution: "НАП" }
    ],
    // Април
    4: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за март", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за март", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за март", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за март", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Авансови вноски за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за март", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за март", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за март", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за март", type: "important", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Годишна данъчна декларация (общ срок)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗМДТ: Данък върху имоти с 5% отстъпка", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 30, description: "Окончателна осигурителна вноска за 2024 г.", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 за 2024 г.", type: "urgent", institution: "НОИ" }
    ],
    // Май
    5: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за април", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за април", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за април", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за април", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за април", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за април", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за април", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за април", type: "important", institution: "НАП" }
    ],
    // Юни
    6: [
        { day: 1, description: "💼 ВЪВЕЖДАНЕ НА ЕЛЕКТРОННИТЕ ТРУДОВИ ДОСИЕТА - Нова система за управление на трудовите отношения", type: "urgent", institution: "МТСП" },
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за май", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за май", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за май", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за май", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за май", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за май", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за май", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за май", type: "important", institution: "НАП" },
        { day: 30, description: "ЗКПО: Годишна данъчна декларация за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Годишна декларация за търговци и земеделски стопани", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗМДТ: Първа вноска за данъци върху имоти", type: "urgent", institution: "НАП" },
        { day: 30, description: "Окончателна осигурителна вноска за 2024 г. (търговци)", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 за 2024 г. (търговци)", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ГОД за 2024 г. - всички задължени лица", type: "urgent", institution: "НСИ" }
    ],
    // Юли
    7: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за юни", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за юни", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за юни", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за юни", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Авансови вноски за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за юни", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за юни", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за юни", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за юни", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" }
    ],
    // Август
    8: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за юли", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за юли", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за юли", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за юли", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за юли", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за юли", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за юли", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за юли", type: "important", institution: "НАП" }
    ],
    // Септември
    9: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за август", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за август", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за август", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за август", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за август", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за август", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за август", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за август", type: "important", institution: "НАП" },
        { day: 30, description: "ЗКПО/ЗДДФЛ: Възможност за корекция на годишни декларации", type: "important", institution: "НАП" },
        { day: 30, description: "КГОД за 2024 г. - консолидиран годишен отчет", type: "urgent", institution: "НСИ" },
        { day: 30, description: "Корекции на ГОД за 2024 г.", type: "urgent", institution: "НСИ" },
        { day: 30, description: "Годишен финансов отчет в Търговския регистър", type: "urgent", institution: "Агенция по вписванията" },
        { day: 30, description: "Окончателна вноска при промени в данъчната декларация", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 при промени в данъчната декларация", type: "urgent", institution: "НОИ" }
    ],
    // Октомври
    10: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за септември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за септември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за септември", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за септември", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за септември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за септември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за септември", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за септември", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗМДТ: Втора вноска за данъци върху имоти", type: "urgent", institution: "НАП" }
    ],
    // Ноември
    11: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за октомври", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за октомври", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за октомври", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за октомври", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за октомври", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за октомври", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за октомври", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за октомври", type: "important", institution: "НАП" },
        { day: 30, description: "📅 Публикуване на данъчен календар за 2026 г.", type: "important", institution: "НАП" }
    ],
    // Декември
    12: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за ноември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за ноември", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за ноември", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за ноември", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за ноември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за ноември", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за ноември", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за ноември", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 31, description: "📅 Публикуване на осигурителен календар за 2026 г.", type: "important", institution: "НОИ" },
        { day: 31, description: "📅 Заповед за ГОД 2025 г.", type: "important", institution: "НСИ" }
    ],
    
    // 2026 г. - Януари
    13: [
        { day: 1, description: "🇪🇺 Първа година с евро като официална валута", type: "important", institution: "БНБ" },
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за декември 2025", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за декември 2025", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за декември 2025", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за декември 2025", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за декември 2025", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за декември 2025", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за декември 2025", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за декември 2025", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 31, description: "Промяна на вид осигуряване (самоосигуряващи се)", type: "important", institution: "НОИ" }
    ],
    
    // 2026 г. - Февруари
    14: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за януари 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за януари 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за януари 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за януари 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за януари 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за януари 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за януари 2026", type: "urgent", institution: "НОИ" },
        { day: 28, description: "ЗДДС: Дистанционни продажби за януари 2026", type: "important", institution: "НАП" },
        { day: 28, description: "ЗДДФЛ: Справки по чл. 73 за изплатени доходи", type: "urgent", institution: "НАП" }
    ],
    
    // 2026 г. - Март
    15: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за февруари 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за февруари 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за февруари 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за февруари 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за февруари 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за февруари 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за февруари 2026", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за февруари 2026", type: "important", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Годишна данъчна декларация с 5% отстъпка", type: "urgent", institution: "НАП" }
    ],
    
    // 2026 г. - Април
    16: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за март 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за март 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за март 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за март 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Авансови вноски за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за март 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за март 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за март 2026", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за март 2026", type: "important", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Годишна данъчна декларация (общ срок)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗМДТ: Данък върху имоти с 5% отстъпка", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" },
        { day: 30, description: "Окончателна осигурителна вноска за 2025 г.", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 за 2025 г.", type: "urgent", institution: "НОИ" }
    ],
    
    // 2026 г. - Май
    17: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за април 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за април 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за април 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за април 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за април 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за април 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за април 2026", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за април 2026", type: "important", institution: "НАП" }
    ],
    
    // 2026 г. - Юни
    18: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за май 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за май 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за май 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за май 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за май 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за май 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за май 2026", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за май 2026", type: "important", institution: "НАП" },
        { day: 30, description: "ЗКПО: Годишна данъчна декларация за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗДДФЛ: Годишна декларация за търговци и земеделски стопани", type: "urgent", institution: "НАП" },
        { day: 30, description: "ЗМДТ: Първа вноска за данъци върху имоти", type: "urgent", institution: "НАП" },
        { day: 30, description: "Окончателна осигурителна вноска за 2025 г. (търговци)", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 за 2025 г. (търговци)", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ГОД за 2025 г. - всички задължени лица", type: "urgent", institution: "НСИ" }
    ],
    
    // 2026 г. - Юли
    19: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за юни 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за юни 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за юни 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за юни 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Данък върху хазартна дейност (тримесечен)", type: "urgent", institution: "НАП" },
        { day: 15, description: "ЗКПО: Авансови вноски за корпоративен данък", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за юни 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за юни 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за юни 2026", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за юни 2026", type: "important", institution: "НАП" },
        { day: 31, description: "ЗКПО: Данъци при източника (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДС: OSS схеми (тримесечни)", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДДФЛ: Тримесечни данъци", type: "urgent", institution: "НАП" },
        { day: 31, description: "ЗДЗП: Данък върху застрахователни премии", type: "urgent", institution: "НАП" }
    ],
    
    // 2026 г. - Август
    20: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за юли 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за юли 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за юли 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за юли 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за юли 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за юли 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за юли 2026", type: "urgent", institution: "НОИ" },
        { day: 31, description: "ЗДДС: Дистанционни продажби за юли 2026", type: "important", institution: "НАП" }
    ],
    
    // 2026 г. - Септември
    21: [
        { day: 10, description: "ЗКПО: Данък от хазартни игри", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: Справка-декларация за август 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗДДС: VIES-декларация за август 2026", type: "urgent", institution: "НАП" },
        { day: 14, description: "ЗСВТС: Интрастат декларации за август 2026", type: "urgent", institution: "НСИ" },
        { day: 15, description: "ЗМДТ: Туристически данък за август 2026", type: "urgent", institution: "НАП" },
        { day: 15, description: "Наредба Н-18: Данни за фискални устройства", type: "urgent", institution: "НАП" },
        { day: 20, description: "ЗСВТС: Интрастат за новорегистрирани", type: "important", institution: "НСИ" },
        { day: 20, description: "Декларация образец №3 за здравно осигурени", type: "important", institution: "НОИ" },
        { day: 25, description: "ЗДДФЛ: Авансов данък от работодатели", type: "urgent", institution: "НАП" },
        { day: 25, description: "ЗДДФЛ: Данък за гъби и плодове", type: "urgent", institution: "НАП" },
        { day: 25, description: "Внасяне осигурителни вноски за август 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №1 за август 2026", type: "urgent", institution: "НОИ" },
        { day: 25, description: "Декларации образец №6 за август 2026", type: "urgent", institution: "НОИ" },
        { day: 30, description: "ЗДДС: Дистанционни продажби за август 2026", type: "important", institution: "НАП" },
        { day: 30, description: "ЗКПО/ЗДДФЛ: Възможност за корекция на годишни декларации", type: "important", institution: "НАП" },
        { day: 30, description: "КГОД за 2025 г. - консолидиран годишен отчет", type: "urgent", institution: "НСИ" },
        { day: 30, description: "Корекции на ГОД за 2025 г.", type: "urgent", institution: "НСИ" },
        { day: 30, description: "Годишен финансов отчет в Търговския регистър", type: "urgent", institution: "Агенция по вписванията" },
        { day: 30, description: "Окончателна вноска при промени в данъчната декларация", type: "urgent", institution: "НОИ" },
        { day: 30, description: "Декларация образец №6 при промени в данъчната декларация", type: "urgent", institution: "НОИ" }
    ]
};

// Месеци на български
const months = [
    "Януари", "Февруари", "Март", "Април", "Май", "Юни",
    "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
];

// Дни от седмицата на български
const weekDays = ["Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Инициализация на календара
document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
    updateUpcomingDeadlines();
    
    // Обновяване при промяна на размера на екрана
    window.addEventListener('resize', function() {
        generateCalendar();
    });
});

// Генериране на календара
function generateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    // Обновяване на заглавието
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        currentMonthElement.textContent = `${currentMonth + 1}/${currentYear}`;
    } else {
        currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;
    }
    
    // Изчистване на календара
    calendarGrid.innerHTML = '';
    
    // Добавяне на заглавията на дните
    weekDays.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Първи ден от месеца
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay() + 1); // Започваме от понеделник
    
    // Генериране на 42 дни (6 седмици) - компактен месечен изглед
    for (let i = 0; i < 42; i++) {
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Проверка дали денят е от текущия месец
        if (dayDate.getMonth() !== currentMonth) {
            dayElement.classList.add('other-month');
        }
        
        // Проверка дали е днешният ден
        const today = new Date();
        if (dayDate.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }
        
        // Добавяне на номера на деня
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = dayDate.getDate();
        dayElement.appendChild(dayNumber);
        
        // Добавяне на сроковете за деня (компактно)
        const monthDeadlines = accountingDeadlines[dayDate.getMonth() + 1];
        if (monthDeadlines) {
            const dayDeadlines = monthDeadlines.filter(deadline => deadline.day === dayDate.getDate());
            if (dayDeadlines.length > 0) {
                // Показваме само бройката на сроковете за компактност
                const deadlineCount = document.createElement('div');
                deadlineCount.className = 'deadline-count';
                deadlineCount.textContent = `${dayDeadlines.length}`;
                dayElement.appendChild(deadlineCount);
                
                // Добавяне на клас за деня
                const urgentCount = dayDeadlines.filter(d => d.type === 'urgent').length;
                const importantCount = dayDeadlines.filter(d => d.type === 'important').length;
                
                if (urgentCount > 0) {
                    dayElement.classList.add('urgent');
                } else if (importantCount > 0) {
                    dayElement.classList.add('has-deadline');
                }
            }
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

// Предишен месец
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
    updateUpcomingDeadlines();
}

// Следващ месец
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
    updateUpcomingDeadlines();
}

// Отиване на днешния ден
function goToToday() {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    generateCalendar();
    updateUpcomingDeadlines();
}

// Обновяване на крайните срокове за месеца
function updateUpcomingDeadlines() {
    const upcomingDeadlinesElement = document.getElementById('upcomingDeadlines');
    upcomingDeadlinesElement.innerHTML = '';
    
    const today = new Date();
    const currentMonthDeadlines = accountingDeadlines[currentMonth + 1];
    const monthlyDeadlines = [];
    
    if (currentMonthDeadlines) {
        // Събираме всички срокове за текущия месец
        currentMonthDeadlines.forEach(deadline => {
            const deadlineDate = new Date(currentYear, currentMonth, deadline.day);
            const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
            
            monthlyDeadlines.push({
                ...deadline,
                date: deadlineDate,
                daysLeft: daysLeft
            });
        });
        
        // Сортиране в хронологичен ред (по дата)
        monthlyDeadlines.sort((a, b) => {
            return a.daysLeft - b.daysLeft;
        });
        
        // Добавяне на информация за общия брой срокове
        const totalDeadlines = monthlyDeadlines.length;
        const urgentDeadlines = monthlyDeadlines.filter(d => d.type === 'urgent').length;
        const importantDeadlines = monthlyDeadlines.filter(d => d.type === 'important').length;
        
        const summaryElement = document.createElement('div');
        summaryElement.className = 'deadline-summary';
        summaryElement.innerHTML = `
            <div class="deadline-summary-text">
                📅 Общо ${totalDeadlines} срока за ${months[currentMonth]} ${currentYear} 
                (${urgentDeadlines} спешни, ${importantDeadlines} важни)
            </div>
        `;
        upcomingDeadlinesElement.appendChild(summaryElement);
        
        // Показване на всички срокове за месеца (максимум 20)
        monthlyDeadlines.slice(0, 20).forEach(deadline => {
            const deadlineElement = document.createElement('div');
            deadlineElement.className = `deadline-item-large ${deadline.type}`;
            
            const dateStr = deadline.date.toLocaleDateString('bg-BG', { 
                day: '2-digit', 
                month: '2-digit' 
            });
            
            const daysLeftText = deadline.daysLeft === 0 ? 'Днес' : 
                               deadline.daysLeft === 1 ? 'Утре' : 
                               deadline.daysLeft < 0 ? 'Изтекъл' :
                               `${deadline.daysLeft} дни`;
            
            deadlineElement.innerHTML = `
                <div class="deadline-date">${dateStr}</div>
                <div class="deadline-description">${deadline.description}</div>
                <div class="deadline-days-left ${deadline.type}">${daysLeftText}</div>
            `;
            
            upcomingDeadlinesElement.appendChild(deadlineElement);
        });
    }
    
    // Ако няма срокове за месеца
    if (monthlyDeadlines.length === 0) {
        const noDeadlinesElement = document.createElement('div');
        noDeadlinesElement.className = 'deadline-item-large regular';
        noDeadlinesElement.innerHTML = `
            <div class="deadline-description">Няма крайни срокове за ${months[currentMonth]} ${currentYear}</div>
        `;
        upcomingDeadlinesElement.appendChild(noDeadlinesElement);
    }
}
