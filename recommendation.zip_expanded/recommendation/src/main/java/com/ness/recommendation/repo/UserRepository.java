package  com.ness.recommendation.repo;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
   public User findByEmail(String email);
    
//   public User findByEmailAndSecQuestionAndSecAnswer(String email,String secQuestion,String secAnswer);

   @Transactional
	@Modifying
	@Query("update User u set u.creditScore=:creditScore where u.email=:email")
	public void updateCreditScore(int creditScore, String email);
	
}
