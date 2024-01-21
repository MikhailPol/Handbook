// enum и его типы
enum EnumRoles {
  ADMIN, GUEST, USER
} // используется для безошибочного указания того или иного свойства обьекта из набора определенных

const enum EnumColors {
  black, pink, green
} // То же самое, только легче в оптимизации

interface IUserA {
  role: EnumRoles // Указываем, что возможно выбрать только значение из enum
  color: EnumColors // Указываем, что возможно выбрать только значение из enum
}

const userA: IUserA = {
  role: EnumRoles.ADMIN,
  color: EnumColors.black
}