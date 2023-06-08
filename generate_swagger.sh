#!/bin/bash

# Fonction pour générer le fichier Swagger à partir d'un fichier YAML
generate_swagger() {
  file="$1"
  output_dir="./src/generated"
  output_name="$2"

  echo "Génération du fichier Swagger pour : $file"
  npx swagger-typescript-api -p "$file" -o "$output_dir" -n "$output_name"
  echo "Fichier Swagger généré avec succès."
  echo
}

# Récursivement parcourir les fichiers YAML dans le dossier et ses sous-dossiers
find_yaml_files() {
  directory="$1"
  
  for file in "$directory"/*.yaml; do
    if [ -f "$file" ]; then
      file_name=$(basename "$file")
      file_name="${file_name%.*}"
      generate_swagger "$file" "$file_name"
    fi
  done
  
  for subdir in "$directory"/*/; do
    find_yaml_files "$subdir"
  done
}

# Point d'entrée du script
main() {
  interfaces_dir="./src/interfaces/YAML"
  
  find_yaml_files "$interfaces_dir"
}

# Appel de la fonction principale
main
