Anotações vagrant
Última aula: 15
https://www.vagrantup.com/
https://app.vagrantup.com/boxes/search 
Instalar um virtualbox 

$ vagrant version
$ vagrant init hashicorp/precise64  #Vai criar um Ubuntu
$ vagrant up #Subir a máquina virtual onde estar o arquivo init e ligar também onde esta o arquivo
$ vagrant status #Ver status máquinas
$ vagrant ssh #ssh do vagrant fazer na pasta do config
$ vagrant ssh-config #ver configuração do SSH
$ ssh -p 2222 vagrant@127.0.0.1 #senha padrão vagrant #Usar o puttyGen para pegar key caso usar o putty
$ vagrant halt # desliga maquina virtual
$ vagrant init ubuntu/bionic64 #Instalar Ubuntu de suporte a longo prazo
$ vagrant reload #restart 
$ vagrant destroy  #apaga a máquina virtual, colocando o -f faz sem perguntar
$ cat .ssh/authorized_keys #Pegar chave do SSH comando dentro da maquina virut
$ ssh -i- .vagrant/machine/default/virtualbox/private_key user@IP
$ ssh-keygen -t rsa #criar chave, ver o comando abaixo
$ cat nova_chave.pub >> .ssh/authorized_keys
$ vagrant destroy -f && vagrant up ## destrói e cria uma nova (bom ser usado enquanto ainda tá testando a maquina nova) 
$ vagrant provision #executa todos os provision config.vm.provision

- vagrantfile #ver arquivo de configuração e também criar as maquinas 
-  .vagrant/machine/default/virtualbox/ #arquivo de chave ssh
- /../bionic #arquivos da pasta compartilhada, no virtual fica em /vagrant/ 

