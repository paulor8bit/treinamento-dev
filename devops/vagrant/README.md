Anotações vagrant<br>
Última aula: 15<br>
https://www.vagrantup.com/<br>
https://app.vagrantup.com/boxes/search <br>
Instalar um virtualbox <br>

$ vagrant version<br>
$ vagrant init hashicorp/precise64  #Vai criar um Ubuntu<br>
$ vagrant up #Subir a máquina virtual onde estar o arquivo init e ligar também onde esta o arquivo<br>
$ vagrant status #Ver status máquinas<br>
$ vagrant ssh #ssh do vagrant fazer na pasta do config<br>
$ vagrant ssh-config #ver configuração do SSH<br>
$ ssh -p 2222 vagrant@127.0.0.1 #senha padrão vagrant #Usar o puttyGen para pegar key caso usar o putty<br>
$ vagrant halt # desliga maquina virtual<br>
$ vagrant init ubuntu/bionic64 #Instalar Ubuntu de suporte a longo prazo<br>
$ vagrant reload #restart <br>
$ vagrant destroy  #apaga a máquina virtual, colocando o -f faz sem perguntar<br>
$ cat .ssh/authorized_keys #Pegar chave do SSH comando dentro da maquina virut<br>
$ ssh -i- .vagrant/machine/default/virtualbox/private_key user@IP<br>
$ ssh-keygen -t rsa #criar chave, ver o comando abaixo<br>
$ cat nova_chave.pub >> .ssh/authorized_keys<br>
$ vagrant destroy -f && vagrant up ## destrói e cria uma nova (bom ser usado enquanto ainda tá testando a maquina nova) <br>
$ vagrant provision #executa todos os provision config.vm.provision<br>

- vagrantfile #ver arquivo de configuração e também criar as maquinas <br>
-  .vagrant/machine/default/virtualbox/ #arquivo de chave ssh<br>
- /../bionic #arquivos da pasta compartilhada, no virtual fica em /vagrant/ <br>

