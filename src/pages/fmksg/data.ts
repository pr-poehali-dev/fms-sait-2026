export const HERO_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/9f10a707-7aa7-457a-861f-084d7ccc2369.jpg";
export const PARK_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/1ddda643-a81b-4c43-9546-b0437b229491.jpg";
export const KIDS_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/e683d7f4-1c4e-4c53-a668-52628cc0a6cb.jpg";
export const LOGO = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/bucket/79efd1ce-1753-462d-8110-f090acd91938.png";

export const NAV_ITEMS = [
  { id: "about", label: "Об организации" },
  { id: "directions", label: "Направления" },
  { id: "calendar", label: "Календарь" },
  { id: "park", label: "Экстрим-парк" },
  { id: "docs", label: "Документы" },
  { id: "partners", label: "Партнёры" },
  { id: "contacts", label: "Контакты" },
];

export const PARTNERS = [
  "Форсаж",
  "LAVR",
  "КТЗ",
  "Reli Oil",
  "ФМС Краснодарского края",
  "CFMOTO",
  "AWM Trade",
  "Puller",
  "Dragonfly",
  "Gorilla",
  "Red Finch",
  "Терек Радио",
];

export const DIRECTIONS = [
  { icon: "Bike", title: "Эндуро", desc: "Соревнования и тренировки по бездорожью и труднопроходимым маршрутам. Дисциплина, требующая высокой технической выносливости и физической подготовки." },
  { icon: "Mountain", title: "Тур-эндуро / Адвенчер", desc: "Многодневные маршрутные соревнования и экспедиции на выносливость по пересечённой местности. Объединяет навыки эндуро с дальними переходами." },
  { icon: "Zap", title: "Эндуро-контест", desc: "Короткие интенсивные испытания на специально подготовленных участках — формат на технику, скорость и мастерство преодоления препятствий." },
  { icon: "Map", title: "Мототуризм", desc: "Дальние выезды, экспедиционные маршруты и путешествия на мотоцикле. Организация маршрутных мотопробегов и туров в экспедиционном формате." },
  { icon: "RotateCcw", title: "Мотоджимхана", desc: "Техника управления мотоциклом на закрытой площадке: точное маневрирование, координация, контроль баланса и скорости на минимальном пространстве." },
  { icon: "Tractor", title: "Квадроциклетный спорт", desc: "Гонки и тренировки на квадроциклах: mud racing, mud ring, трофи-рейд, кантри-кросс. Соревнования на выносливость и технику вождения." },
  { icon: "Users", title: "Детский и юношеский спорт", desc: "Тренировки и соревнования для детей от 5 лет: детское эндуро и детские квадроциклы. Безопасная среда, сертифицированные инструкторы." },
  { icon: "Trophy", title: "Массовые мероприятия", desc: "Фестивали, чемпионаты, открытые старты, семейные заезды, благотворительные пробеги и официальные мероприятия организации." },
  { icon: "Building2", title: "Инфраструктурные проекты", desc: "Создание и развитие спортивных объектов, трасс, тренировочных зон и инфраструктуры для соревнований, обучения и массовых мероприятий." },
  { icon: "Handshake", title: "Взаимодействие", desc: "Сотрудничество с Федерацией мотоциклетного спорта Краснодарского края, Федерацией мотоциклетного спорта Республики Адыгея, органами власти и партнёрами." },
];

export type EventStatus = "own" | "participate" | "plan";
export type EventDiscipline = "enduro" | "turenduro" | "quad" | "kids";

export const DISCIPLINE_LABELS: Record<EventDiscipline, string> = {
  enduro: "Эндуро",
  turenduro: "Тур-эндуро",
  quad: "Квадроциклы",
  kids: "Детские",
};

export const STATUS_LABELS: Record<EventStatus, string> = {
  own: "Организуем",
  participate: "Участвуем",
  plan: "Планируем",
};

export const EVENTS_2026: {
  date: string;
  title: string;
  place: string;
  status: EventStatus;
  discipline: EventDiscipline;
}[] = [
  { date: "Январь 2026", title: "Мокрая миля", place: "Геленджик / Краснодарский край", status: "own", discipline: "enduro" },
  { date: "Март 2026", title: "Енотка — этап Чемпионата КК по эндуро", place: "Краснодарский край", status: "own", discipline: "enduro" },
  { date: "Сентябрь 2026", title: "Adventure Rally Gelendzhik", place: "Геленджик", status: "own", discipline: "turenduro" },
  { date: "Апрель 2026", title: "Mud Racing — Кубок Адыгеи / Краснодарского края", place: "Адыгея / Краснодарский край", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Маламино — этап Чемпионата КК по квадроциклам", place: "Краснодарский край", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Uchetun Trophy", place: "Россия", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Этап Чемпионата России", place: "Воронеж", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Детская гонка на квадроциклах", place: "Геленджик", status: "plan", discipline: "kids" },
  { date: "Дата уточняется", title: "Алла 11", place: "Россия", status: "own", discipline: "quad" },
  { date: "Дата уточняется", title: "Кубок России", place: "Иваново", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Prime Ring", place: "Россия", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Золото Жигулей", place: "Самарская область", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Пятигорск 9.0", place: "Пятигорск", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Шахаут", place: "Республика Адыгея", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Арманьяк", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Последний богатырь", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Безумка", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Золото Кокана", place: "Астраханская область", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Альфа-рейс", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Тихий Дон", place: "Ростовская область", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Князь Владимир", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Баха", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Великая степь", place: "Россия", status: "participate", discipline: "turenduro" },
];

export const NEWS = [
  { date: "14 июля 2023", tag: "Организация", title: "Организация прошла государственную регистрацию", excerpt: "Геленджикская городская общественная организация «Федерация мотоциклетного и квадроциклетного спорта» официально зарегистрирована. ОГРН 1232300040939." },
  { date: "21 февраля 2025", tag: "Экстрим-парк", title: "Ведётся работа над проектом Extreme Park Gelendzhik", excerpt: "Организация развивает концепцию многофункциональной спортивной площадки для соревнований, обучения, семейного отдыха и событийного туризма." },
  { date: "13 ноября 2024", tag: "Детский спорт", title: "Формирование программы детско-юношеских тренировок", excerpt: "Разрабатывается программа тренировок и соревнований для детей и подростков: детское эндуро и детские квадроциклы." },
];

export const DOCS_AVAILABLE = [
  { icon: "FileCheck", title: "Свидетельство о регистрации" },
  { icon: "ScrollText", title: "Устав организации" },
  { icon: "Shield", title: "Политика конфиденциальности" },
  { icon: "CheckSquare", title: "Согласие на обработку персональных данных" },
  { icon: "ClipboardList", title: "Положения и регламенты мероприятий" },
  { icon: "FileSignature", title: "Формы заявок и анкет" },
];

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}