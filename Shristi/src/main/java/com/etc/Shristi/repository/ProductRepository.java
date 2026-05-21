package com.etc.Shristi.repository;

import com.etc.Shristi.model.Product;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // JpaRepository gives you: findAll, findById, save, deleteById — out of the box
}