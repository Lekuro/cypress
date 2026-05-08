# cypress
TestSquad intership

## Запуск тестів (Running tests)

Для запуску тестів ви можете використовувати наступні команди:

### 1. Графічний режим (Cypress Test Runner)
Рекомендується для розробки та перегляду того, як проходять тести.
```bash
npx cypress open
```

### 2. Фоновий режим (Headless)
Швидкий запуск у консолі без відкриття браузера (як у CI/CD).
```bash
npx cypress run
```

### 3. Запуск з кастомним конфігом
Запуск тестів з використанням альтернативного конфігураційного файлу.
```bash
npx cypress run --config-file cypress.custom.config.js
```
