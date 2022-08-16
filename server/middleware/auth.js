import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
   try {
      // to get the token from frontend
      const token = req.headers.authorization.split(" ")[1];

      let decodedData
      if (token) {
         decodedData = jwt.verify(token, 'test')

         // optional chaining
         req.userId = decodedData?.id
      }

      next();

   } catch (error) {
      console.log(error);
   }
}

export default auth