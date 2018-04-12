package com.cs5200.project.repository;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.entity.TransactionEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends CrudRepository<TransactionEntity, Integer> {

    List<TransactionEntity> findByBuyerId(int userId);

    List<TransactionEntity> findBySellerId(int userId);

}
