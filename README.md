# Solarized Light Theme for Notebooks in JupyterLab

This theme provides solarized light styling only for notebooks.
The JupyterLab UI remains untouched.

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab_solarized_light
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
