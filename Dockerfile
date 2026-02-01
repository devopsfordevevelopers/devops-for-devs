FROM maven:3.9.9-eclipse-temurin-17

WORKDIR /app

COPY pom.xml .

COPY src ./src

RUN mvn clean package -DskipTests

EXPOSE 8085

CMD ["java", "-jar", "target/java-app-1.0.0.jar"]
