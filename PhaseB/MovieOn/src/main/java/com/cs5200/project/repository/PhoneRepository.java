package com.cs5200.project.repository;

import com.cs5200.project.entity.PhoneEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhoneRepository extends CrudRepository <PhoneEntity, Integer> {
}
