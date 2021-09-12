package com.example.aplivendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.aplivendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {

}
