package com.shahid.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shahid.entities.Passenger;
@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
