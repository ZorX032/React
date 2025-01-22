//створюємо метод, визначаємо що і по якому ключу ми хочемо знайти
export const retriveLocalStorage = <T>(key: string) => {
    //створюємо константу object і присвоюємо їй значення ключа з локального сховища, або НІЧОГО стрінгового типу, на випадок якщо ключа не існує
    const object = localStorage.getItem(key) || '';
    //якщо object не існує
    if (!object) {
        //то повертаємо строго типізований об'єкт
        return {} as T;
    }
    //якщо if не виконується то створюємо parse в якому парсимо object
    const parse = JSON.parse(object);
    // повертаємо строго типизований parse
    return parse as T;

}
