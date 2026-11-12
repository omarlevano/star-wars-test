# Guía rápida de Git para este proyecto

Este proyecto ya es un repositorio de Git (carpeta oculta `.git`).
Ábrelo en VS Code y, en la terminal (Ctrl + ñ), prueba:

```bash
git log --oneline --graph --all     # ver la historia y las ramas
git branch                          # ver las ramas (main y sesion-11)
git switch sesion-11                # ir a la rama de la sesión 11
git switch main                     # volver a la rama principal
```

## Configuración (solo la primera vez en tu computadora)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
git config --global init.defaultBranch main
```

## Flujo de trabajo con una rama nueva

```bash
git switch -c sesion-12            # 1. crear la rama y pasarse a ella
# ... editar archivos ...
git status                         # 2. ver qué cambió
git add .                          # 3. preparar los cambios
git commit -m "Sesión 12: ..."     # 4. guardar una versión
git switch main                    # 5. volver a main
git merge sesion-12                # 6. unir la rama a main
git branch -d sesion-12            # 7. (opcional) borrar la rama ya unida
```

## Subirlo a GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```
