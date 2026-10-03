// Generado por el cuaderno plantilla_tu_modelo.ipynb. No lo edites a mano.
window.MODELO = {
  "version": "2.0.0",
  "proyecto": "Predictor de precio de diamantes",
  "fuente": {
    "nombre": "diabetic_data",
    "url": "",
    "portal": "",
    "id": ""
  },
  "fecha_entrenamiento": "2026-10-03",
  "n_total": 101766,
  "n_entrenamiento": 81412,
  "n_prueba": 20354,
  "semilla": 42,
  "min_casos": 407,
  "sklearn_version": "1.6.1",
  "objetivo": {
    "nombre": "time_in_hospital",
    "etiqueta": "TIempo hospitalizado",
    "minimo": 0.0,
    "maximo": 15,
    "unidad": "Dias",
    "tipo": "numero"
  },
  "metricas": {
    "modelo": {
      "clave": "lineal",
      "nombre": "Regresión lineal (Ridge)",
      "mae": 2.029529060512612,
      "rmse": 2.636433119011553,
      "r2": 0.20143391798542198,
      "publicado": true
    },
    "linea_base": {
      "clave": "linea_base",
      "nombre": "Línea base: siempre el promedio",
      "mae": 2.328324556687949,
      "rmse": 2.950396435158394,
      "r2": -8.771437309351704e-05
    },
    "comparacion": [
      {
        "clave": "linea_base",
        "nombre": "Línea base: siempre el promedio",
        "mae": 2.328324556687949,
        "rmse": 2.950396435158394,
        "r2": -8.771437309351704e-05
      },
      {
        "clave": "lineal",
        "nombre": "Regresión lineal (Ridge)",
        "mae": 2.029529060512612,
        "rmse": 2.636433119011553,
        "r2": 0.20143391798542198,
        "publicado": true
      },
      {
        "clave": "arbol",
        "nombre": "Árbol de decisión",
        "mae": 1.9949213842383378,
        "rmse": 2.5984656892942697,
        "r2": 0.22426869798121507
      },
      {
        "clave": "bosque",
        "nombre": "Bosque aleatorio (50 árboles)",
        "mae": 1.9946289383434372,
        "rmse": 2.598142869666834,
        "r2": 0.22446143151272302
      },
      {
        "clave": "boosting",
        "nombre": "Gradient Boosting",
        "mae": 1.9945511894340622,
        "rmse": 2.598494497907193,
        "r2": 0.2242514971639894
      }
    ]
  },
  "cobertura_mae": 0.5991942615702073,
  "promedio_nacional": 4.395986871843248,
  "promedio_entrenamiento": 4.401513290424016,
  "tipo": "lineal",
  "algoritmo": "Ridge (alpha = 1) con codificación one-hot",
  "algoritmo_corto": "Regresión lineal",
  "variables": [
    {
      "nombre": "num_medications",
      "etiqueta": "num_medications",
      "etiqueta_corta": "num_medications",
      "grupo": "caso",
      "ayuda": "Elige el rango.",
      "tipo": "categoria",
      "mas_frecuente": "9 a 13",
      "categorias": [
        {
          "valor": "hasta 9",
          "etiqueta": "hasta 9",
          "coeficiente": -1.7306308368092647,
          "frecuencia": 0.20164103571954994,
          "n": 16416,
          "en_formulario": true
        },
        {
          "valor": "9 a 13",
          "etiqueta": "9 a 13",
          "coeficiente": -0.9266943076419504,
          "frecuencia": 0.22875006141600746,
          "n": 18623,
          "en_formulario": true
        },
        {
          "valor": "13 a 17",
          "etiqueta": "13 a 17",
          "coeficiente": -0.24689346921139702,
          "frecuencia": 0.21495602613865278,
          "n": 17500,
          "en_formulario": true
        },
        {
          "valor": "17 a 22",
          "etiqueta": "17 a 22",
          "coeficiente": 0.5897201978638886,
          "frecuencia": 0.18082100918783472,
          "n": 14721,
          "en_formulario": true
        },
        {
          "valor": "más de 22",
          "etiqueta": "más de 22",
          "coeficiente": 2.3144984157971424,
          "frecuencia": 0.1738318675379551,
          "n": 14152,
          "en_formulario": true
        }
      ],
      "importancia": 1.0918843372905864
    }
  ],
  "excluidas": [],
  "casos_prueba": [
    {
      "id": 1,
      "entradas": {
        "num_medications": "hasta 9"
      },
      "puntaje_real": 2.0,
      "prediccion_sklearn": 2.775933883457537
    },
    {
      "id": 2,
      "entradas": {
        "num_medications": "9 a 13"
      },
      "puntaje_real": 1.0,
      "prediccion_sklearn": 3.5798704126248513
    },
    {
      "id": 3,
      "entradas": {
        "num_medications": "13 a 17"
      },
      "puntaje_real": 3.0,
      "prediccion_sklearn": 4.259671251055405
    },
    {
      "id": 4,
      "entradas": {
        "num_medications": "17 a 22"
      },
      "puntaje_real": 7.0,
      "prediccion_sklearn": 5.09628491813069
    },
    {
      "id": 5,
      "entradas": {
        "num_medications": "más de 22"
      },
      "puntaje_real": 10.0,
      "prediccion_sklearn": 6.821063136063945
    }
  ],
  "textos": {
    "titulo": "Predictor de precio de diamantes",
    "subtitulo": "Machine Learning 1 · Universidad EAN",
    "pregunta": "¿Cuánto vale un diamante?",
    "aviso_etico": "Es una estimación con error: úsala para aprender y discutir, no para tomar decisiones importantes.",
    "etiqueta_promedio": "Promedio de los datos",
    "subetiqueta_medidor": "Dias",
    "autor": "Luisa Fernanda",
    "autor_url": "https://github.com/lfrojasc",
    "grupos": {
      "caso": "Datos del caso"
    }
  },
  "intercepto": 4.506564720266802
};
