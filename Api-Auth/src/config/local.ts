let localConfig = {
    hostname: 'localhost',
    port: 3000,
    jwt_secret : 'levelup',
    jwt_expiration_in_seconds: 36000,
    permissionLevels: {
      NORMAL_USER: 1,
      PAID_USER: 4
    }
  };
  
export default localConfig;