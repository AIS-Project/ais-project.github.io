---
sidebar_position: 1
title: Instalation
sidebar_label: Instalation
lastUpdatedAt: 2023/05/30
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
---

# **Instalação**

Esta página contém informações sobre as dependências necessárias para o pacote, como instalá-lo e como importar os módulos.

### **Dependências:**

O módulo requer a instalação do [python 3.8.10](https://www.python.org/downloads/) ou superior.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

|    Pacotes    |     Versão    |
|:-------------:|:-------------:|
|    numpy      |    ≥ 1.23.0   |
|    scipy      |    ≥ 1.8.1    |
|    tqdm       |    ≥ 4.64.1   |

</div>

### **Instalação do usuário**

A maneira mais simples de instalação do AISP é utilizando o ``pip``:

```bash
pip install aisp
```

### **Como importar as Tecnicas**

``` python
from aisp.NSA import RNSA, BNSA

nsa = RNSA(N=300, r=0.05)
```