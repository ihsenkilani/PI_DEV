package com.esprit.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.esprit.spring.entites.Client;
import com.esprit.spring.entites.Jackpot;
import com.esprit.spring.repository.ClientRepository;


@Service
public class ClientService implements ClientServiceI {
@Autowired
ClientRepository clientRepository;

	@Override
	public Client findbyid(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
	/*Chercher un utilisateur*/
	public Client findOne(long id){
	return clientRepository.findById(id).get();
	}
	@Override
	public Client findbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Client findbyid(Long s) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Client findbyid(Client u) {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getId() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Client addClient(Client c) {
		clientRepository.save(c);
		return null;
	}
}


