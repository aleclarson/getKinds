
# getKinds v1.0.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Takes a type and returns an array containing the type and its supertypes (if any exist).

```coffee
getKinds = require "getKinds"

getKinds Function  # => [ Function, Object ]

getKinds Object    # => [ Object ]
```
