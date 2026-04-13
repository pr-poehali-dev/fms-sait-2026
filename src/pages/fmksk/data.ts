export const HERO_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/7bd5fc77-1a21-42b4-9f2e-ca84c8a45cca.jpg";
export const INFRA_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/901626f0-d610-4ff4-949e-83b3a9aaa79c.jpg";
export const KIDS_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/e06b4379-5100-4f23-b76f-ddd90c200f78.jpg";
export const LOGO = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/bucket/79efd1ce-1753-462d-8110-f090acd91938.png";

export const NAV_ITEMS = [
  { id: "about", label: "О федерации" },
  { id: "disciplines", label: "Спортивные направления" },
  { id: "calendar", label: "Спортивный календарь" },
  { id: "infrastructure", label: "Инфраструктура" },
  { id: "cooperation", label: "Сотрудничество" },
  { id: "contacts", label: "Связаться" },
];

export const PARTNERS = [
  "Форсаж", "LAVR", "КТЗ", "Relynolli",
  "ФМС Краснодарского края", "CFMOTO", "AWM Trade", "Puller",
  "Dragonfly", "Gorilla", "Red Finch", "Терек Радио",
];

export const DISCIPLINES = [
  { icon: "Bike", title: "Эндуро", desc: "Гонки и тренировки на бездорожье в масштабе всего Краснодарского края. Техническая выносливость, физическая подготовка и навыки управления мотоциклом в сложных условиях." },
  { icon: "Mountain", title: "Тур-эндуро / Адвенчер", desc: "Экспедиционные многодневные маршруты по пересечённой местности региона. Синтез выносливости, навигации и мастерства преодоления природных препятствий." },
  { icon: "Zap", title: "Эндуро-контест", desc: "Интенсивные испытания на подготовленных участках — скорость, техника и мастерство преодоления препятствий в коротком формате." },
  { icon: "Map", title: "Мототуризм", desc: "Экспедиционные маршруты, дальние мотопробеги и туры по территории Краснодарского края и за его пределами." },
  { icon: "RotateCcw", title: "Мотоджимхана", desc: "Точное управление мотоциклом на ограниченном пространстве: маневрирование, координация, контроль баланса." },
  { icon: "Tractor", title: "Квадроциклетный спорт", desc: "Mud racing, mud ring, трофи-рейд, кантри-кросс — соревнования и подготовка спортсменов на квадроциклах в краевом масштабе." },
  { icon: "Users", title: "Детско-юношеский спорт", desc: "Тренировочные программы для детей от 5 лет по всему краю: детское эндуро, квадроциклы, школы безопасного вождения." },
  { icon: "Trophy", title: "Официальные мероприятия", desc: "Чемпионаты, кубки, открытые старты, фестивали, семейные заезды и благотворительные пробеги краевого и федерального уровня." },
  { icon: "Building2", title: "Спортивная инфраструктура", desc: "Координация развития трасс, тренировочных зон и площадок для соревнований и обучения на территории Краснодарского края." },
  { icon: "Handshake", title: "Межрегиональное взаимодействие", desc: "Координация с ФМС Краснодарского края, ФМС Республики Адыгея, клубами, органами власти и спортивным сообществом региона." },
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

export const EVENTS_2026: { date: string; title: string; place: string; status: EventStatus; discipline: EventDiscipline; }[] = [
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
  { date: "14 июля 2023", tag: "Регистрация", title: "Краевая федерация официально зарегистрирована", excerpt: "Краснодарская краевая общественная организация «Федерация мотоциклетного и квадроциклетного спорта» получила государственную регистрацию." },
  { date: "5 марта 2025", tag: "Инфраструктура", title: "Запуск программы развития тренировочных площадок", excerpt: "Стартовала программа по созданию сети тренировочных зон и спортивных трасс на территории Краснодарского края." },
  { date: "22 декабря 2024", tag: "Молодёжь", title: "Комплексная программа подготовки юных спортсменов", excerpt: "Разработана программа обучения детей и подростков мотоциклетному и квадроциклетному спорту с акцентом на безопасность." },
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
