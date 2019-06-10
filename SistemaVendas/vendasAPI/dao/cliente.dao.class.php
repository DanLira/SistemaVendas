<?php

class TClienteDao extends TDao
{
    
    public function __construct()
    {}
    
    private function table()
    {
        return 'clientes';
    }
    
    private function fields()
    {
        return 'idcliente, nome, cpf';
    }
    
    private function values(TClienteEntity $entity)
    {
        return $entity->idcliente . ", " . TUtil::strAspas($entity->nome) . ", " . TUtil::strAspas($entity->cpf);
    }
    
    private function setValues(TClienteEntity $entity)
    {
        return " nome = " . TUtil::strAspas($entity->nome) . ", " . " cpf = " . TUtil::strAspas($entity->cpf);
    }
    
    private function whereId($id)
    {
        return ' idcliente = ' . $id . '  ';
    }
    
    public function insert(TClienteEntity $entity)
    {
        $entity->idcliente = 0;
        
        $this->commandInsert($this->table(), $this->fields(), $this->values($entity));
    }
    
    public function update(TClienteEntity $entity)
    {
        $this->commandUpdate($this->table(), $this->setValues($entity), $this->whereId($entity->idcliente));
    }
    
    public function delete($id)
    {
        $this->commandDelete($this->table(), $this->whereId($id));
    }
    
    public function get($id)
    {
            $entity = new TClienteEntity();
            $entity->idcliente = 7;
            $entity->nome = "JOAO";
            $entity->cpf = "314.097.413-20";
            
            return $entity;
    }
}

?>
