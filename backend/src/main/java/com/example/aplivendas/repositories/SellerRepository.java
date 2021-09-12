package com.example.aplivendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.aplivendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller,Long> {

}
