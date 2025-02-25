package com.female.Apparel.repo;


import com.female.Apparel.entity.Apparel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApparelRepo extends JpaRepository<Apparel, Long> {
}
