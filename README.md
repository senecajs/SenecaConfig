# @seneca/Config

> _Seneca Config_ is a plugin for [Seneca](http://senecajs.org)

Live configuration plugin for the Seneca framework.

[![npm version](https://img.shields.io/npm/v/@seneca/Config.svg)](https://npmjs.com/package/@seneca/Config)
[![build](https://github.com/senecajs/SenecaConfig/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/SenecaConfig/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/SenecaConfig/badge.svg?branch=main)](https://coveralls.io/github/senecajs/SenecaConfig?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/SenecaConfig/badge.svg)](https://snyk.io/test/github/senecajs/SenecaConfig)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/20872/branches/581541/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=20872&bid=581541)
[![Maintainability](https://api.codeclimate.com/v1/badges/8242b80adb8acb685afd/maintainability)](https://codeclimate.com/github/senecajs/SenecaConfig/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------- |

## Install

```sh
$ npm install @seneca/Config
```

## Quick Example

```js
// Setup - get the key value (<SECRET>) separately from a vault or
// environment variable.
Seneca().use('Config', {})

TODO
```

<!--START:options-->

## Options

_None._

<!--END:options-->

<!--START:action-list-->


## Action Patterns

* [get:val,sys:config](#-getvalsysconfig-)
* [init:val,sys:config](#-initvalsysconfig-)
* [list:val,sys:config](#-listvalsysconfig-)
* [map:val,sys:config](#-mapvalsysconfig-)
* [set:val,sys:config](#-setvalsysconfig-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `get:val,sys:config` &raquo;

No description provided.


#### Parameters


* _key_ : [Function: String]


----------
### &laquo; `init:val,sys:config` &raquo;

No description provided.


#### Parameters


* _key_ : [Function: String]


----------
### &laquo; `list:val,sys:config` &raquo;

No description provided.



----------
### &laquo; `map:val,sys:config` &raquo;

No description provided.


#### Parameters


* _prefix_ : [Function: String]


----------
### &laquo; `set:val,sys:config` &raquo;

No description provided.


#### Parameters


* _key_ : [Function: String]


----------


<!--END:action-desc-->

## More Examples

## Motivation

## Support

## API

## Contributing

## Background
