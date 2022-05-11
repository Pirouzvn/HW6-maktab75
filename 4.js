function UserManager() {
    return {
      list: [],
      userAdder(id, name, lastName, roles, age, score) {
        let user = {};
        user.id = id;
        user.name = name;
        user.lastName = lastName;
        user.roles = roles;
        user.age = age;
        user.scores = score;
        this.list.push(user);
        return this.list;
      },
      courseAndScore(id, course, score) {
        this.list.forEach((item) => {
          if (item.id === id) {
            item.scores[course] = score;
          }
        });
        return this.list;
      },
      roleAndStatus(id, role) {
        this.list.forEach((item) => {
          if (item.id === id) {
            item.roles = [...item.roles, role];
            if (item.age <= 18) {
              item.statues = "very young";
            } else {
              item.statues = "old enough";
            }
          }
        });
        return this.list;
      },
      convertAndAdd(id, fatherName) {
        let newObj = {};
        this.list.forEach((item) => {
          if (item.id === id) {
            let array = Object.entries(item);
            array.splice(3, 0, ["fatherName", fatherName]);
            array.forEach((item) => (newObj[item[0]] = item[1]));
          }
        });
        return newObj;
      },
    };
  }
  //Test:
  let a = new UserManager();
  console.log(
    a.userAdder(6, "Hossein", "Zenderoh", ["student", "admin"], 19, {
      english: 10,
      math: 19.5,
      physics: 14,
    })
  );
  console.log(a.courseAndScore(6, "chemistry", 19));
  console.log(a.roleAndStatus(6, "teacher"));
  console.log(a.convertAndAdd(6, "Behzad"));