import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function HalamanLogin() {
  const { control, handleSubmit, errors } = useForm();

  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>First Name is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true, minLength: 8}}
        defaultValue=""
      />

      {errors.lastName?.type === "required" && <Text>Last Name is required.</Text>}

      {errors.lastName?.type === "minLength" && <Text>Minimum 8 characters are required</Text>}

      <Button title="Submit" onPress={handleSubmit((data) => console.log(data))} />
    </View>
  );
}

/*function HalamanLogin(){
    const { register, handleSubmit} = useForm();
    const onSubmit = (d) =>
        alert(JSON.stringify(d));
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                First Name:
                <input {...register("firstName")}/>
            </label>
                <label>
                Last Name:
                <input {...register("LastName")}/>
            </label>

            <p>Render: <span>{counter++}</span></p>
            <input type="submit" value="submit"/>
        </form>
    )
    }

    export default HalamanLogin;
*/
