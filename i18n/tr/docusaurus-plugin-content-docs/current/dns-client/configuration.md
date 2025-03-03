---
title: Yapılandırma dosyası
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

`dns` nesnesi DNS sunucusunun davranışını yapılandırır. Aşağıdaki özelliklere sahiptir:

### `cache` {#dns-cache}

`cache` nesnesi, DNS sorgulama sonuçlarının önbelleğe alınmasını yapılandırır. Aşağıdaki özelliklere sahiptir:

- `enabled`: Whether or not the DNS results should be cached.

  **Örnek:** `true`

- `size`: The maximum size of the DNS result cache as human-readable data size. It must be greater than zero if `enabled` is `true`.

  **Example:** `128 MB`

- `client_size`: Yapılandırılmış her istemcinin adresi veya alt ağı için DNS sonuç önbelleğinin insan tarafından okunabilir veri boyutu olarak maksimum boyutu. It must be greater than zero if `enabled` is `true`.

  **Example:** `4 MB`

### `server` {#dns-server}

`server` nesnesi, gelen isteklerin işlenmesini yapılandırır. Aşağıdaki özelliklere sahiptir:

- `listen_addresses`: The set of addresses with ports to listen on.

  **Özellik örneği:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

The `bootstrap` object configures the resolution of [upstream](#dns-upstream) server addresses. Aşağıdaki özelliklere sahiptir:

- `servers`: The list of servers to resolve the hostnames of upstream servers.

  **Özellik örneği:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: The timeout for bootstrap DNS requests as a human-readable duration.

  **Example:** `2 s`

### `upstream` {#dns-upstream}

`upstream` nesnesi, isteklerin fiili çözümlenmesini yapılandırır. Aşağıdaki özelliklere sahiptir:

- `groups`: Grubun adına göre anahtarlanan üst kaynak sunucular kümesi. Aşağıdaki alanlara sahiptir:

  - `address`: Yukarı akış sunucusunun adresi.

    **Örnek:** `'8.8.8.8:53'`

  - `match`: İsteğin eşleştirileceği kriterlerin listesi. Her giriş aşağıdaki özellikleri içerebilir:

    - `question_domain`: The domain or a suffix of the domain that the set of upstream servers should be used to resolve.

      **Örnek:** `'mycompany.local'`

    - `client`: The client’s address or a subnet of the client’s address from which the set of upstream servers should resolve requests. It must have no significant bits outside the subnet mask.

      **Örnek:** `'192.0.2.0/24'`

    :::note Not

    Properties specified within a single entry are combined with a logical AND. Girişler mantıksal bir VEYA ile birleştirilir.

    :::

    **Özellik örneği:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` should contain at least a single entry named `default`, and optionally a single entry named `private`, both should have no `match` property.

  :::

  The `default` group will be used when there are no matches among other groups. The `private` group will be used to resolve the PTR requests for the private IP addresses. Such queries will be answered with `NXDOMAIN` if no `private` group is defined.

- `timeout`: The timeout for upstream DNS requests as a human-readable duration.

  **Örnek:** `2s`

### `fallback` {#dns-fallback}

The `fallback` object configures the behavior of the DNS server in case of failure. Aşağıdaki özelliklere sahiptir:

- `servers`: The list of servers to use after the actual [upstream](#dns-upstream) failed to respond.

  **Özellik örneği:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: The timeout for fallback DNS requests as a human-readable duration.

  **Örnek:** `2s`

## `debug` {#debug}

The `debug` object configures the debugging features. Aşağıdaki özelliklere sahiptir:

### `pprof` {#debug-pprof}

The `pprof` object configures the [`pprof`][pkg-pprof] HTTP handlers. Aşağıdaki özelliklere sahiptir:

- `port`: The port to listen on for debug HTTP requests on localhost.

  **Örnek:** `6060`

- `enabled`: Whether or not the debug profiling is enabled.

  **Örnek:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

`log` nesnesi günlüğe kaydını yapılandırır. Aşağıdaki özelliklere sahiptir:

- `output`: The output to which logs are written.

  :::note Not

  Log entries written to the system log are in `text` format (see below) and use the system timestamp.

  :::

  Olası değerler:

  - `syslog` means that the platform-specific system log is used, which is syslog for Linux and Event Log for Windows.

  - `stdout` for standard output stream.

  - `stderr` for standard error stream.

  - Absolute path to the log file.

  **Örnek:** `/home/user/logs`

  **Örnek:** `C:\Kullanıcılar\kullanıcı\logs.txt`

  **Örnek:** `syslog`

- `format`: Günlük girdilerinin biçimini belirtir.

  Olası değerler:

  - `default`: Basit bir biçim. Örnek:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Yapılandırılmış bir JSON biçimi. Örnek:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: json\` ile aynıdır ancak sınırlı sayıda alana sahiptir. Örnek:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Yapılandırılmış bir metin biçimi. Örnek:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Örnek:** `default`

- `timestamp`: Günlük girdilerine bir zaman damgası eklenip eklenmeyeceğini belirtir.

  **Örnek:** `false`

- `verbose`: Specifies whether the log should be more informative.

  **Örnek:** `false`
