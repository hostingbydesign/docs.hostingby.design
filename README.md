# HostingByDesign Documentation

Official documentation for [HostingByDesign](https://hostingby.design) services.


## Found errors or got improvements?

Please report errors in [issues](https://github.com/hostingbydesign/docs.hostingby.design/issues) or better yet, help us out by resolving them and make a PR.

If you have improvements a PR is very welcome!


#### Troubleshooting

- `Error: error:0308010C:digital envelope routines::unsupported`

    This occours due old peer dependencies that are not compatible with OpenSSL 3 after node v17.  
    To fix it you can temporary set the variable `NODE_OPTIONS` to allow the legacy openssl:
    ```sh
    export NODE_OPTIONS=--openssl-legacy-provider
    yarn start
    yarn build
    ```
    Close the current shell session will unset the varible (as expected) leaving no side effects.  
    If you need again just run it again.
