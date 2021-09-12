package com.example.aplivendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.aplivendas.dto.SaleSuccessDTO;
import com.example.aplivendas.dto.SaleSumDTO;
import com.example.aplivendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {
	
	@Query("SELECT new com.example.aplivendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))" 
	+ "FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.example.aplivendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited),SUM(obj.deals))" 
	+ "FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSuccessDTO> successGroupedBySeller();
}
