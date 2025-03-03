---
title: Начало работы
sidebar_position: 2
---

## Установка {#installation}

### Официальные релизы

Загрузите архив с бинарным файлом для вашей операционной системы со страницы \[последний стабильный релиз]\[релизы]. Полный список поддерживаемых платформ, а также ссылки на бета- и edge-версии (нестабильные) можно найти на [нашей странице платформ][platforms].

Чтобы установить AdGuard Home в качестве службы, распакуйте архив, войдите в каталог `AdGuardHome` и запустите:

```sh
./AdGuardHome -s install
```

#### Примечания

- Пользователям **Fedora Linux** и его производных: установите AdGuard Home в директорию `/usr/local/bin`. В противном случае могут возникнуть проблемы с SELinux и разрешениями. Смотрите \[ошибку 765] и \[ошибку 3281].

- Пользователям **macOS 10.15 Catalina** и более новых версий следует поместить рабочую директорию AdGuard Home в директорию `/Applications`.

### Docker и Snap

Мы также предоставляем [официальный докер-образ AdGuard Home][docker] и [официальный пакет Snap Store][snap] для опытных пользователей.

### Другие

Другие неофициальные варианты включают в себя:

- [Дополнение Home Assistant][has] поддерживается [@frenck](https://github.com/frenck).

- [OpenWrt LUCI app][luci] поддерживается [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm] и другие ОС на базе Arch могут собираться с помощью пакета [`adguardhome`][aghaur] в [AUR][aur], поддерживаемого [@graysky2](https://github.com/graysky2).

- Приложение [Cloudron][cloudron] поддерживается [@gramakri](https://github.com/gramakri).

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## Первый старт {#first-time}

Прежде всего, проверьте настройки фаервола. Для установки и использования AdGuard Home должны быть доступны следующие порты и протоколы:

- 3000/TCP для первоначальной установки;
- 80/TCP для веб-интерфейса;
- 53/UDP для DNS-сервера.

Возможно, вам потребуется открыть дополнительные порты для протоколов, отличных от обычного DNS, например DNS-over-HTTPS.

DNS-серверы привязываются к порту 53, для чего в большинстве случаев требуются права суперпользователя, [см. ниже](#running-without-superuser). Поэтому на Unix-системах вам придётся запускать его с помощью `sudo` или `doas` в терминале:

```sh
sudo ./AdGuardHome
```

На Windows запустите `cmd.exe` или PowerShell с правами администратора и оттуда `AdGuardHome.exe`.

Когда вы запускаете AdGuard Home в первый раз, он начинает прослушивать `0.0.0.0:3000` и предлагает вам открыть его в браузере:

```none
AdGuard Home доступен по следующим адресам:
http://127.0.0.1:3000
http://[::1]:3000
[…]
```

Там вы пройдёте первоначальную настройку.

![Экран выбора сетевого интерфейса AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![Экран создания пользователя AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Читайте [нашу статью о безопасном запуске AdGuard Home](running-securely.md) и узнайте, как выбрать начальную конфигурацию, которая подходит вам лучше всего.

## Запуск в качестве службы {#service}

Следующим шагом будет регистрация AdGuard Home в качестве системной службы (также известной как демон). Чтобы установить AdGuard Home в качестве службы, выполните команду:

```sh
sudo ./AdGuardHome -s install
```

На Windows выполните `cmd.exe` с правами администратора и `AdGuardHome.exe -s install` для регистрации службы Windows.

Вот другие команды, которые могут понадобиться для управления сервисом:

- `AdGuardHome -s uninstall`: удалить службу AdGuard Home.
- `AdGuardHome -s start`: запустить службу.
- `AdGuardHome -s stop`: остановить службу.
- `AdGuardHome -s restart`: перезапустить службу.
- `AdGuardHome -s status`: показать текущий статус службы.

### Логи

По умолчанию логи записываются в stderr, когда вы запускаете AdGuard Home в терминале. Если вы запускаете его как службу, вывод логов зависит от платформы:

- На macOS лог записывается в файлы '/var/log/AdGuardHome.\*.log.

- В других Unix-системах лог записывается в `syslog` или `journald`.

- В Windows лог записывается в журнал событий Windows.

Вы можете изменить это поведение [в файле конфигурации AdGuard Home][conf].

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Обновление {#update}

![Пример уведомления об обновлении](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Когда выходит новая версия, в интерфейсе AdGuard Home появляется уведомление и кнопка _Обновить сейчас_. Нажмите эту кнопку, и AdGuard Home автоматически обновится до последней версии. Текущий исполняемый файл AdGuard Home сохраняется в директории `backup` вместе с текущим файлом конфигурации, поэтому при необходимости вы можете отменить изменения.

### Обновление вручную {#manual-update}

Если кнопка не отображается или автоматическое обновление не удалось, вы можете выполнить его вручную. У нас есть [подробное руководство по ручному обновлению][mupd], но вкратце:

1. Загрузите новый пакет AdGuard Home.

2. Распакуйте его во временную директорию.

3. Замените старый исполняемый файл AdGuard Home на новый.

4. Перезапустите AdGuard Home.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Обновления Docker, Home Assistant и Snapcraft

Автообновления для установок Docker, Hass.io/Home Assistant и Snapcraft отключены. Вместо этого обновите изображение.

### Обновление командной строки

Чтобы обновить пакет AdGuard Home без использования Web API, выполните следующие действия:

```sh
./AdGuardHome --update
```

## Настройка устройств {#configure-devices}

### Роутер

Такая настройка автоматически покроет все устройства, использующие ваш домашний роутер, и вам не нужно будет настраивать каждое из них по отдельности.

1. Откройте настройки вашего роутера. Обычно вы можете получить к нему доступ из браузера по URL-адресу, например http://192.168.0.1/ или http://192.168.1.1/. Вам может потребоваться ввести пароль. Если вы его не помните, то часто можете сбросить пароль, нажав кнопку на самом роутере, но имейте в виду, что можете потерять все конфигурации роутера. Если вашему роутеру требуется приложение для его настройки, установите его на свой телефон или компьютер и используйте его для доступа к настройкам роутера.

2. Найдите настройки DHCP/DNS. Ищите буквы DNS рядом с полем, которое допускает два или три набора цифр. Каждый из наборов разделён на четыре группы от одной до трёх цифр.

3. Введите там адреса ваших серверов AdGuard Home.

4. На некоторых типах роутеров невозможно настроить пользовательский DNS-сервер. В этом случае может помочь настройка AdGuard Home в качестве DHCP-сервера. В противном случае вам следует обратиться к руководству, чтобы узнать, как настроить DNS-серверы на конкретной модели роутера.

### Windows

1. Откройте _Панель управления_ из меню Пуск или из поиска Windows.

2. Перейдите в раздел _Сеть и Интернет_, а затем в раздел _Центр управления сетями и общим доступом_.

3. В левой части экрана найдите кнопку _Изменить настройки адаптера_ и нажмите её.

4. Выберите активное соединение, щёлкните по нему правой кнопкой мыши и выберите _Свойства_.

5. Найдите в списке пункт _IP версии 4 (TCP/IPv4)_ (или _IP версии 6 (TCP/IPv6)_ для IPv6), выделите его и затем снова нажмите _Свойства_.

6. Выберите _Использовать следующие адреса DNS-серверов_ и введите адреса ваших серверов AdGuard Home.

### macOS

1. Нажмите на значок Apple и перейдите в раздел _Системные предпочтения_.

2. Нажмите _Сеть_.

3. Выберите первое соединение в списке и нажмите _Дополнительно_.

4. Выберите вкладку DNS и введите адреса серверов AdGuard Home.

### Android

:::note

Инструкции для устройств на базе Android могут отличаться в зависимости от версии ОС и производителя.

:::

1. На главном экране меню Android выберите пункт _Настройки_.

2. Нажмите пункт _Wi-Fi_ в меню. Отобразится экран со всеми доступными сетями (установить пользовательский DNS для мобильного соединения невозможно).

3. Длинным нажатием выберите сеть, к которой вы подключены, и нажмите _Изменить сеть_.

4. На некоторых устройствах для просмотра дополнительных настроек может потребоваться установить флажок _Дополнительно_. Чтобы настроить параметры DNS для Android, вам нужно изменить настройки IP с _DHCP_ на _Static_.

5. Измените значения DNS 1 и DNS 2 на адреса ваших серверов AdGuard Home.

### iOS

1. На главном экране нажмите _Настройки_.

2. Выберите _Wi-Fi_ в левом меню (настроить DNS для мобильных сетей невозможно).

3. Нажмите на название активной в данный момент сети.

4. В поле _DNS_ введите адреса серверов AdGuard Home.

## Запуск без суперпользователя {#running-without-superuser}

Вы можете запустить AdGuard Home без привилегий суперпользователя, но для этого необходимо либо предоставить двоичному файлу такую возможность (в Linux), либо указать ему другой порт (на всех платформах).

### Предоставление необходимых возможностей (только для Linux)

Для использования этого метода требуется утилита `setcap`. Возможно, вам придётся установить его с помощью менеджера пакетов вашего дистрибутива Linux.

Чтобы разрешить AdGuard Home под управлением Linux прослушивать порт 53 без прав суперпользователя и привязывать свои DNS-серверы к определённому интерфейсу, выполните команду:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Затем запустите `./AdGuardHome` от имени непривилегированного пользователя.

### Изменение порта прослушивания DNS

Чтобы настроить AdGuard Home на прослушивание порта, не требующего привилегий суперпользователя, остановите AdGuard Home, откройте `AdGuardHome.yaml` в редакторе и найдите эти строки:

```yaml
dns:
    # …
    port: 53
```

Вы можете изменить порт на любой, превышающий 1024, чтобы не требовать привилегий суперпользователя.

## Ограничения {#limitations}

Некоторые файловые системы не поддерживают системный вызов `mmap(2)`, необходимый для системы статистики. См. также \[задачу 1188].

Вы можете решить эту проблему:

- либо путём указания аргументов `--work-dir DIRECTORY` в бинарном файле `AdGuardHome`. Эта опция укажет AGH использовать другую директорию для всех своих файлов вместо директории по умолчанию `./data`.

- или создав символические ссылки, указывающие на другую файловую систему, поддерживающую `mmap(2)` (например, tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
