# Guia de Imagens do Robô BTRIX

Este guia explica como adicionar as imagens do robô BTRIX ao site.

## Estrutura de Pastas

Crie a seguinte estrutura na pasta `public`:

```
public/
  images/
    robot-barbershop.jpg      # Barbershop/Salon
    robot-restaurant.jpg      # Restaurant/Hospitality
    robot-office.jpg          # Office/Professional Services
    robot-warehouse.jpg       # Warehouse/Logistics
    robot-store.jpg           # Retail Store
    robot-petshop.jpg         # Pet Shop
    robot-spa.jpg             # Spa/Clinic
    robot-cafe.jpg            # Cafe
    robot-supermarket.jpg     # Supermarket
    robot-factory.jpg         # Factory
```

## Mapeamento de Imagens

As imagens estão mapeadas para os seguintes serviços:

### Packs
- **BTRIX ESSENTIAL**: `robot-barbershop.jpg` (Barbershop image)
- **BTRIX PRO**: `robot-restaurant.jpg` (Restaurant image)
- **BTRIX CUSTOM/ENTERPRISE**: `robot-warehouse.jpg` (Warehouse image)

### Agents
- **Sales Agent**: `robot-office.jpg`
- **Marketing Agent**: `robot-office.jpg`
- **Finance Agent**: `robot-office.jpg`
- **Inventory Agent**: `robot-warehouse.jpg`
- **Social Media Agent**: `robot-restaurant.jpg`
- **Design Agent**: `robot-salon.jpg`
- **Video Agent**: `robot-salon.jpg`

### Sector Use Cases
- **Clinics & Healthcare**: `robot-spa.jpg`
- **Restaurants & Hospitality**: `robot-restaurant.jpg`
- **Real Estate**: `robot-office.jpg`
- **E-commerce**: `robot-store.jpg`
- **Professional Services**: `robot-office.jpg`
- **Pet Shops**: `robot-petshop.jpg`
- **Education**: `robot-office.jpg`
- **Hostels/Hotels**: `robot-restaurant.jpg`

## Como Adicionar as Imagens

1. **Salve as imagens** com os nomes corretos na pasta `public/images/`

2. **Otimize as imagens** antes de adicionar:
   - Formato: JPG ou WebP
   - Tamanho recomendado: 1200x800px (ou proporção similar)
   - Peso: máximo 300KB por imagem

3. **Atualize os componentes** se necessário:
   - Os componentes já estão configurados para usar as imagens
   - Se você quiser usar imagens diferentes, edite o arquivo `lib/data.ts`

## Placeholder Atual

Atualmente, o site usa um placeholder CSS (`robot-silhouette`) que cria uma silhueta do robô usando gradientes. Quando você adicionar as imagens reais, elas aparecerão automaticamente.

## Exemplo de Uso

As imagens são carregadas usando Next.js Image component quando disponíveis. O placeholder CSS é usado como fallback.

Para adicionar uma imagem real, substitua o div com classe `robot-silhouette` por:

```tsx
<Image
  src="/images/robot-barbershop.jpg"
  alt="BTRIX Robot in Barbershop"
  fill
  className="object-cover"
/>
```

## Nota

Certifique-se de que todas as imagens tenham alt text descritivo para acessibilidade e SEO.

