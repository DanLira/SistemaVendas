<?php

final class TFacade {
    
    // LOGIN
    public function autenticarUsuario(TAction $action)
    {
        $login = $action->getParam('login');
        $senha = $action->getParam('senha');
        if ($login && $senha) {
            $rule = new TLoginRule();
            echo $rule->autenticarUsuario($login, $senha);;
        }
        
    }

    // USUARIO
    public function consultarUsuario(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TUsuarioRule();
            echo $rule->get($id);;
        }
    }

    public function incluirUsuario(TAction $action)
    {
        $entity = new TUsuarioEntity();
        $entity->setParam($action);
        $rule = new TUsuarioRule();
        echo $rule->insert($entity);
    }
    
    public function alterarUsuario(TAction $action)
    {
        $entity = new TUsuarioEntity();
        $entity->setParam($action);
        $rule = new TUsuarioRule();
        echo $rule->update($entity);
    }
    
    public function excluirUsuario(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TUsuarioRule();
            echo $rule->delete($id);
        }
    }
    

    // CLIENTE
    public function listarCliente(TAction $action)
    {
        $nome = $action->getParam('nome');
        $rule = new TFabricanteRule();
        echo $rule->list($nome);;
    }
    
    public function consultarCliente(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TClienteRule();
            echo $rule->get($id);;
        }
    }
    
    public function incluirCliente(TAction $action)
    {
        $entity = new TClienteEntity();
        $entity->setParam($action);
        $rule = new TClienteRule();
        echo $rule->insert($entity);
    }
    
    public function alterarCliente(TAction $action)
    {
        $entity = new TClienteEntity();
        $entity->setParam($action);
        $rule = new TClienteRule();
        echo $rule->update($entity);
    }
    
    public function excluirCliente(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TClienteRule();
            echo $rule->delete($id);
        }
    }
    
    // FABRICANTE
    public function listarFabricante(TAction $action)
    {
        $razaosocial = $action->getParam('razaosocial');
        $rule = new TFabricanteRule();
        echo $rule->list($razaosocial);;
    }
    
    public function consultarFabricante(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TFabricanteRule();
            echo $rule->get($id);;
        }
    }
    public function incluirFabricante(TAction $action)
    {
        $entity = new TFabricanteEntity();
        $entity->setParam($action);
        $rule = new TFabricanteRule();
        echo $rule->insert($entity);
    }
    
    public function alterarFabricante(TAction $action)
    {
        $entity = new TFabricanteEntity();
        $entity->setParam($action);
        $rule = new TFabricanteRule();
        echo $rule->update($entity);
    }
    
    public function excluirFabricante(TAction $action)
    {
        $id = $action->getParam('id');
        if ($id) {
            $rule = new TFabricanteRule();
            echo $rule->delete($id);
        }
    }
}

?>