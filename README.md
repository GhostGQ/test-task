# Тестовое задание

Это минимальное веб-приложение, представляющее каталог товаров, с функционалом добавления товаров в корзину и их отображения на отдельных страницах. Приложение реализовано с использованием **Next.js** и **React**.

## 🚀 Функциональные требования

1. **Главная страница**:
   - Отображение списка товаров с карточками, содержащими:
     - Название товара.
     - Изображение товара.
     - Цена товара.
     - Кнопка для добавления товара в корзину.
   - Кнопка "Показать больше", подгружающая 3 дополнительных товара.
2. **Детальная страница товара**:

   - Отображение подробной информации о товаре (название, цена, описание и изображение).

3. **Поиск**:

   - Пользователь может искать товары по названию с использованием поля поиска, которое применяется с дебаунсом для оптимизации запросов.

4. **Корзина**:
   - Товары можно добавлять и удалять в корзину.
   - В корзине отображается общее количество товаров и общая стоимость.
   - Содержимое корзины сохраняется в **localStorage** для сохранения данных при перезагрузке страницы.

## 🛠 Технологии

- **Next.js 15**: фреймворк для серверного рендеринга и маршрутизации.
- **React**: библиотека для построения пользовательского интерфейса.
- **CSS/SCSS**: стилизация с использованием SCSS для улучшенной структуры и организации стилей.
- **Context API**: для управления состоянием корзины товаров.
- **localStorage**: для сохранения состояния корзины между перезагрузками страницы.

## 💡 Принципы разработки

### Архитектура:

- Использована **FSD (Feature-Sliced Design)** архитектура, где каждый функционал проекта был разделен на **features**. Например, корзина, список продуктов, поиск — всё реализовано в отдельных папках для обеспечения лучшей масштабируемости и удобства разработки.

### UI/UX:

- Дизайн ориентирован на **адаптивность** и **кроссбраузерность**.
- Использованы простые и понятные компоненты для карточек товаров и страниц.
- Важные элементы, такие как кнопка "Показать больше" и поле поиска, выполнены с визуальной интеракцией для удобства пользователя.

### Состояние:

- Для управления состоянием корзины использована **Context API**, что позволило легко передавать состояние по всем компонентам приложения.
- **Debounced поиск** с задержкой отправки запроса для улучшения производительности и предотвращения излишней загрузки API.

### Локальное хранилище:

- Все товары в корзине сохраняются в **localStorage**, что позволяет пользователю не потерять товары при перезагрузке страницы.

## 📦 Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/product-catalog.git
   ```

2. Установите зависимости:

   ```bash
   cd product-catalog
   npm install
   ```

3. Запустите приложение в локальном окружении:

   ```bash
   npm run dev
   ```

   Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## 📜 Структура проекта

```
/public            # Статические файлы (изображения и т.д.)
/src
  /entities        # Логика и API запросы для работы с продуктами
  /features        # Основные функциональные блоки (корзина, товары и т.д.)
  /shared          # Общие компоненты (кнопки, контейнеры и т.д.)
  /widgets         # Компоненты, которые можно использовать на разных страницах
  /styles          # Стили
  /app
    /products        # Страница с каталогом товаров
    /products/[id]   # Страница с деталями товара
```

## ✅ Особенности реализации

- **Адаптивный дизайн**: проект адаптирован для мобильных и десктопных устройств с использованием SCSS.
- **Динамическая загрузка данных**: товары подгружаются при прокрутке страницы или при нажатии на кнопку "Показать больше".
- **Контекст корзины**: управление корзиной товаров реализовано с использованием **Context API**. Все данные о содержимом корзины сохраняются в **localStorage**.
- **API-запросы**: товары загружаются через имитацию API, данные хранятся в JSON-формате.
- **Поиск**: поиск товаров по названию реализован с использованием дебаунсинга, что снижает нагрузку на сервер и улучшает производительность.

## 🧪 Тестирование

- Приложение работает корректно при добавлении товаров в корзину, удалении и поиске.
- Все данные сохраняются в **localStorage** и восстанавливаются при перезагрузке страницы.
