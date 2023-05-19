import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { custom } from '../data'
import Product from './Product'
import axios from 'axios'

const Container= styled.div`
    display:flex;
`;

const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;
`;

const Right= styled.div`
    flex:1;
    padding:20px;
    flex-direction:column;
`;


const Design = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">


  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Select Item
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">




    <Container>
      <Left>


          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
              Saree
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              T-shirt
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Dress
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Top
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Jacket
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Long Skirt
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Shirt
            </label>
          </div>


      </Left>
      <Right>
      <div class="form-outline">
        <input type="number" id="typeNumber" class="form-control" />
        <label class="form-label" for="typeNumber">Length of cloth required(in m).</label>
      </div>
      <div class="form-outline">
        <input type="number" id="typeNumber" class="form-control" />
        <label class="form-label" for="typeNumber">Approximate area of cloth to be customized(in cm^2).</label>
      </div>

      <input type="file" class="form-control" id="customFile" />
      <label class="form-label" for="customFile">Upload your design.</label>
      </Right>
    </Container>


      </div>
    </div>
  </div>



  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Select Color
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">

      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
      Pink
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Blue
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Black
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Red
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Gray
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    White
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Yellow
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Green
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Voilet
  </label>
</div>



  </div>
      </div>
    </div>
  </div>









  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Select material
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">


      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Cotton
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
         Polyster
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
         Nylon
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
         Welvet
        </label>
      </div>


      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Estimated price
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">


      </div>
    </div>
  </div>
</div>
  )
}

export default Design
