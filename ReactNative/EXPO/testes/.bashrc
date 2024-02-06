export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] 
&& printf %s "${HOME}/.nvm" || printf %s 
"${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. 
"$NVM_DIR/nvm.sh" # Carrega o nvm
[ -s "$NVM_DIR/bash_completion" ] && \. 
"$NVM_DIR/bash_completion" # Carrega o suporte 
a autocompletar
export 
PATH=$PATH:/Users/lucas.costa/Library/Android/sdk/platform-tools

